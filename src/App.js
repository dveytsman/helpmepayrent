import React from "react";
import ItemsList from "./ItemsList";
import items from "./items_data";

const App = () => {
  return (
    <div>
      <ItemsList items={items} />
    </div>
  );
};
export default App;
