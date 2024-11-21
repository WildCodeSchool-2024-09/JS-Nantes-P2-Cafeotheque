import "../pages/HomePage/LatestArrival.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { DataModel } from "../models/index";
//The LatestArrival function is used to retrieve the latest product and display it.

function LatestArrival() {
  const [lastElement, setLastElement] = useState<DataModel | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/coffee")
      .then((response) => response.json())
      .then((result) => {
        setLastElement(lastCoffee(result));
      });
  }, []);

  const lastCoffee = (data: DataModel[]): DataModel => {
    let result = 0;
    let ret = data[0];
    for (let i = 0; i < data.length; i++) {
      const date = new Date(data[i].added_date).getTime();
      if (date >= result) {
        result = date;
        ret = data[i];
      }
    }
    return ret;
  };

  return (
    <>
      <section className="container-latest-arrival">
        <img
          src="./public/images/Café-nouveauté.jpg"
          alt="Les nouveaux arrivages"
        />
        <section className="container-text-latest-arrival">
          <h3>Latest arrival</h3>
          {lastElement ? (
            <>
              <p>{lastElement.description}</p>
              <Link to={`/coffee/${lastElement.id}`}>
                <button type="button">+ D'info</button>
              </Link>
            </>
          ) : (
            <p>chargement..</p>
          )}
        </section>
      </section>
    </>
  );
}

export default LatestArrival;
