import { useEffect, useState } from "react";
import "./CoffeeDetailPage.css";
import { Link, useParams } from "react-router-dom";
import type { DataModel } from "../../models/index";
import { useAuth } from "../../utils/context/AuthContext";

function CoffeeDetailPage() {
  const { userData, setUserData, loggedIn } = useAuth();
  const { id } = useParams();

  const [data, setData] = useState<DataModel | false | null>(null);
  const [alikeItems, setAlikeItems] = useState<DataModel[]>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`http://localhost:4000/api/coffee/${id}`);
      if (response.status !== 200) return setData(false);
      const itemData = await response.json();
      setData(itemData);
      response = await fetch("http://localhost:4000/api/coffee");
      if (response.status !== 200) return;
      let alikeItems = await response.json();
      alikeItems = alikeItems.filter(
        (el: DataModel) => el.continent === itemData.continent,
      );
      const startIndex = Math.floor(Math.random() * (alikeItems.length - 3));
      alikeItems = alikeItems.slice(startIndex, startIndex + 4);
      setAlikeItems(alikeItems);
      if (loggedIn && userData && id)
        setIsLiked(userData.likedCoffees.includes(Number.parseInt(id)));
    };
    fetchData();
  }, [id, userData, loggedIn]);

  function handleLikeItem() {
    if (!userData || !id) return null;
    const likedCoffees = userData.likedCoffees;
    const itemId = Number.parseInt(id);
    if (isLiked) {
      // handle unlike item
      userData.likedCoffees.splice(likedCoffees.indexOf(itemId), 1);
      setUserData(userData);
    } else {
      // Handle like item
      userData.likedCoffees.push(itemId);
      setUserData(userData);
    }
    setIsLiked((prev) => !prev);
  }

  if (data === null) return <p>chargement</p>;
  if (data === false) return <p>coffee not found</p>;
  return (
    <div className="coffee-detail-page">
      <img
        src="https://i.ibb.co/Tw6jpvR/pngegg-2-2.png"
        alt="Feuilles de caféier"
        className="coffee-leaves"
      />
      {/* Conteneur de l'image du café */}
      <div className="content-container">
        <img
          src={
            data.imgSrc
              ? data.imgSrc
              : "https://i.ibb.co/VmKTCwc/Vietnam-coffee-beans-VOA.jpg"
          }
          alt="Café"
        />
        <div className="text-container">
          <section>
            <div id="title-like-icon-container">
              <h2>{data.name}</h2>
              {loggedIn && (
                <button
                  className="pointer toggle-button"
                  onClick={handleLikeItem}
                  type="button"
                >
                  <img
                    src={
                      isLiked
                        ? "https://i.ibb.co/F5g3MZ2/Property-1-Variant2.png"
                        : "https://i.ibb.co/MB1L9Wy/Property-1-Default.png"
                    }
                    alt={isLiked ? "icon unlike item" : "icon like item"}
                  />
                  <p id="like-popup">{isLiked ? "Vraiment?" : "Like moi !"}</p>
                </button>
              )}
            </div>
            <p>Profil : {data.profile}</p>
            <h3>Histoire</h3>
            <p>{data.description}</p>
            <h3>Conseil de préparation</h3>
            <p>{data.preparation}</p>
          </section>
          <section className="info-section">
            <hgroup className="info-item">
              <h4 className="label">Continent:</h4>
              <p className="value">{data.continent}</p>
            </hgroup>
            <hgroup className="info-item">
              <h4 className="label">Pays:</h4>
              <p className="value">{data.country}</p>
            </hgroup>
            <hgroup className="info-item">
              <h4 className="label">Profil:</h4>
              <p className="value">{data.profile}</p>
            </hgroup>
            <hgroup className="info-item">
              <h4 className="label">Prix:</h4>
              <p className="value">€{data.price}</p>
            </hgroup>
          </section>
        </div>
      </div>

      {/* Section avec la carte du monde et les images */}
      <div className="section-with-map-and-info">
        <img
          className="no-mob"
          src="https://i.ibb.co/kh05r9N/pngegg-2.png"
          alt="Grains de café"
        />
        <Link
          to={`/coffees?country=${data.country}`}
          className="card-link pointer"
        >
          <button type="button">Voir tout les cafés du même pays</button>
        </Link>
      </div>

      {/* Section des cartes avec des images de café des différentes régions (sous la carte du monde) */}
      <div className="cards-container">
        {alikeItems.map((el) => {
          return (
            <Link to={`/coffee/${el.id}`} key={el.id} className="card-region">
              <img
                src={
                  el.imgSrc
                    ? el.imgSrc
                    : "https://i.ibb.co/rcSPZH2/000406-2023-1kg-perou-grains.jpg"
                }
                alt={`${el.name}`}
              />
              <h3>{el.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CoffeeDetailPage;
