import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    );
  }
}

export default ItemsList;
