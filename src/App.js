import React from "react";
import ItemsList from "./ItemsList";
import items from "./items_data";
import "./item_styles.css";
import Popup from "./Popup";

const App = () => {
  return (
    <div className="app">
      <h1>Help Me Pay Rent</h1>
      <h3>This site is here to help me pay rent</h3>
      <h4>
        TBD: The plan is to create a site for users in need of funds to pay
        bills to be able to sell their goods
      </h4>
      <Popup />
      <ItemsList className="products" items={items} />
    </div>
  );
};
export default App;
