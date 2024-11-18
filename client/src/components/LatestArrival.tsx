import "../pages/HomePage/LatestArrival.css";
import { Link } from "react-router-dom";
import data from "../mocks/apiMock.json";
import type { DataModel } from "../models/index";
//The LatestArrival function is used to retrieve the latest product and display it.

function LatestArrival() {
  const lastCoffee = (): DataModel => {
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
  const lastElement = lastCoffee();
  return (
    <>
      <section className="container-latest-arrival">
        <img
          src="./public/images/Café-nouveauté.jpg"
          alt="Les nouveaux arrivages"
        />
        <section className="container-text-latest-arrival">
          <h3>Latest arrival</h3>
          <p>{lastElement.description}</p>
          <Link to={`/coffee/${lastElement.id}`}>
            <button type="button">+ D'info</button>
          </Link>
        </section>
      </section>
    </>
  );
}

export default LatestArrival;
