import React from "react";
import ItemsList from "./ItemsList";
import items from "./items_data";

const App = () => {
  return (
    <div className="app">
      <h1>Help Me Pay Rent</h1>
      <h3>This site is here to help me pay rent</h3>
      <h4>
        TBD: The plan is to create a site for users in need of funds to pay
        bills to be able to sell their goods
      </h4>
      <ItemsList className="products" items={items} />
    </div>
  );
};
export default App;
