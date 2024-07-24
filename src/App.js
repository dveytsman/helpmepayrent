import React, { useState } from "react";
import ItemsList from "./ItemsList";
import { items } from "./items_data";
import "./app_styles.css";
import Popup from "./Popup";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };
  const [searchField, setSearchField] = useState("");
  const [filterType, setFilterType] = useState("all");
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const uniqueTypes = [
    ...new Set(items.map((item) => item.type.toLowerCase())),
  ];

  const filteredTypeItems = items.filter((item) => {
    if (filterType === "all") {
      return item;
    } else {
      return item.type.toLowerCase() === filterType.toLowerCase();
    }
  });

  const filteredItems = filteredTypeItems.filter((item) => {
    return item.itemName
      .toLowerCase()
      .includes(searchField.toLowerCase().trim());
  });
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="app">
      <h1>Help Me Pay Rent</h1>
      <h3>The eccomerce site with a heart.</h3>
      <h4>
        TBD: The plan is to create a site for users in need of funds to pay
        bills to be able to sell their goods
      </h4>
      <select
        className="filter"
        value={filterType}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      ></input>
      <Popup />

      <ItemsList
        className="products"
        items={filteredItems}
        onItemClick={handleItemClick}
      />

      <Popup
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        item={selectedItem}
      />
    </div>
  );
};
export default App;
