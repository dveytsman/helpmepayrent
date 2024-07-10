import React from "react";
import Item from "./Item";
import "./item_styles.css";

const ItemsList = ({ items, onItemClick }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.id} item={item} onClick={onItemClick} />;
      })}
    </div>
  );
};

export default ItemsList;
