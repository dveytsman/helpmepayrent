import React from "react";
import "./item_styles.css";

const Item = ({ item, onClick }) => {
  return (
    <div className="item" onClick={() => onClick(item)}>
      <h3>{item.itemName}</h3>
      <img src={item.images[0]} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};
export default Item;
