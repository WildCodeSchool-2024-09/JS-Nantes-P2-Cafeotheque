import { useEffect, useState } from "react";
import "../pages/CoffeesPage/FilteredList.css";
import type { DataModel } from "../types/FilteredList";

// function that makes a ul appear when you click on the input
// first list

interface FilterCheck {
  continent: { isActive: boolean; filters: string[] | [] };
  country: { isActive: boolean; filters: string[] | [] };
  profile: { isActive: boolean; filters: string[] | [] };
  price: { isActive: boolean; filters: string[] | [] };
}

function FilteredList() {
  const [data, setData] = useState<DataModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/coffee")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  const [isActive, setIsActive] = useState({
    continent: false,
    country: false,
    profile: false,
    price: false,
  });
  setIsActive;
  // Checkbox select
  const [checked, setChecked] = useState<FilterCheck>({
    continent: { isActive: false, filters: [] },
    country: { isActive: false, filters: [] },
    profile: { isActive: false, filters: [] },
    price: { isActive: false, filters: [] },
  });

  const handleClick = (el: React.MouseEvent<HTMLInputElement>) => {
    const target = el.target as HTMLInputElement;
    // console.warn(checked[target.id].isActive);
    setChecked((prevValues) => ({
      ...prevValues,
      [target.id]: {
        // isActive: !checked[target.id].isActive,
        filters: [],
      },
    }));
  };

  function getDifferentElement(key: keyof DataModel) {
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
        <section className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="continent"
            name="continent"
            checked={checked.continent.isActive}
          />
          <label htmlFor="continent">Continent</label>
          {checked.continent.isActive && (
            <section className="list-filter">
              {getDifferentElement("continent").map((el) => {
                return (
                  <div key={`${el}-porte`}>
                    <input
                      key={el}
                      type="checkbox"
                      onClick={handleClick}
                      id={el}
                      name={el}
                    />
                    <label key={`${el}-label`} htmlFor={el}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </section>
          )}
        </section>

        <section className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="country"
            name="country"
          />
          <label htmlFor="country">Pays</label>
          {isActive.country && (
            <section className="list-filter">
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
            </section>
          )}
        </section>

        <section className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="profile"
            name="profile"
          />
          <label htmlFor="profile">Saveur</label>
          {isActive.profile && (
            <section className="list-filter">
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
            </section>
          )}
        </section>
        <section className="container-list-filtered">
          <input
            onClick={handleClick}
            type="checkbox"
            id="price"
            name="price"
          />
          <label htmlFor="price">Prix</label>
          {isActive.price && (
            <section className="list-filter">
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
            </section>
          )}
        </section>
      </section>
    </aside>
  );
}

export default FilteredList;
