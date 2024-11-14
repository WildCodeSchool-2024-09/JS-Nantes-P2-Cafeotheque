import { Link } from "react-router-dom";
import "../assets/style/Item.css";
import type { DataModel } from "../models/index";

interface ItemProps {
  item: DataModel;
}

function Item({ item }: ItemProps) {
  return (
    <Link to={`/coffee/${item.id}`} className="item-container">
      <img
        alt={item.name}
        src={
          item.imgSrc
            ? item.imgSrc
            : "https://www.svgrepo.com/show/312966/roasted-coffee-bean.svg"
        }
      />
      <p>{item.name}</p>
      <div className="item-details-container">
        <p>{item.country}</p>
        <p>{item.profile}</p>
      </div>
    </Link>
  );
}
export default Item;
