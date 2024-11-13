import { useState } from "react";
import data from "../mocks/apiMock.json";
import "../pages/CoffeesPage/FilteredList.css";

// function that makes a ul appear when you click on the input
// first list
function FilteredList() {
  const [isActive, setIsActive] = useState({
    continent: { status: false, checked: [] },
    pays: false,
    profile: false,
    price: false,
  });
  const handleClick = (el: React.MouseEvent<HTMLInputElement>) => {
    const target = el.target as HTMLInputElement;
    setIsActive((prevValues) => ({
      ...prevValues,
      [target.id]: !prevValues[target.id as keyof typeof isActive],
    }));
    console.warn(handleClick);
  };

  interface dataModel {
    id: number;
    name: string;
    continent: string;
    country: string;
    profile: string;
    price: number;
    added_date: string;
    description: string;
    preparation: string;
  }

  function getDifferentElement(key: keyof dataModel) {
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (newArray.indexOf(data[i][key].toString()) === -1) {
        newArray.push(data[i][key].toString());
      }
    }
    return newArray;
  }
  return (
    <aside className="container-list-left">
      <section>
        {/* Listing Continents */}
        <ul className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="continent"
            name="continent"
          />
          <label htmlFor="continent">Continent</label>
          {isActive.continent && (
            <li className="list-filter">
              {getDifferentElement("continent").map((el) => {
                return (
                  <div key={`${el}-porte`}>
                    <input key={el} type="checkbox" id={el} name={el} />
                    <label key={`${el}-label`} htmlFor={el}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </li>
          )}
        </ul>

        <ul className="container-list-filtered">
          <input onClick={handleClick} type="checkbox" id="pays" name="pays" />
          <label htmlFor="pays">Pays</label>
          {isActive.pays && (
            <li className="list-filter">
              {getDifferentElement("country").map((el) => {
                return (
                  <div key={`${el}-porte`}>
                    <input key={el} type="checkbox" id={el} name={el} />
                    <label key={`${el}-label`} htmlFor={el}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </li>
          )}
        </ul>

        <ul className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="profile"
            name="saveur"
          />
          <label htmlFor="saveur">Saveur</label>
          {isActive.profile && (
            <li className="list-filter">
              {getDifferentElement("profile").map((el) => {
                return (
                  <div key={`${el}-porte`}>
                    <input key={el} type="checkbox" id={el} name={el} />
                    <label key={`${el}-label`} htmlFor={el}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </li>
          )}
        </ul>
        <ul className="container-list-filtered">
          <input onClick={handleClick} type="checkbox" id="price" name="prix" />
          <label htmlFor="prix">Prix</label>
          {isActive.price && (
            <li className="list-filter">
              {getDifferentElement("price").map((el) => {
                return (
                  <div key={`${el}-porte`}>
                    <input key={el} type="checkbox" id={el} name={el} />
                    <label key={`${el}-label`} htmlFor={el}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </li>
          )}
        </ul>
      </section>
    </aside>
  );
}

export default FilteredList;
