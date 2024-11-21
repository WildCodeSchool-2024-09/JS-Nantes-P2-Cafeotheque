import { useEffect, useState } from "react";
import "./CoffeeDetailPage.css";
import { Link, useParams } from "react-router-dom";
import type { DataModel } from "../../models/index";

function CoffeeDetailPage() {
  const [data, setData] = useState<DataModel | false | null>(null);
  const [alikeItems, setAlikeItems] = useState<DataModel[]>([]);

  const { id } = useParams();

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
    };
    fetchData();
  }, [id]);

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
            <h2>{data.name}</h2>
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
