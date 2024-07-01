import React from "react";
import Item from "./Item";
import "./item_styles.css";

class ItemsList extends React.Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    );
  }
}

export default ItemsList;
