import React from "react";
import "./item_styles.css";

class Item extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.itemName}</h1>
        <p>{this.props.item.description}</p>
        <p>Price: {this.props.item.price}</p>
        {this.props.item.images.map((image, index) => (
          <img key={index} src={image} alt={image.alt} />
        ))}
      </div>
    );
  }
}

export default Item;
