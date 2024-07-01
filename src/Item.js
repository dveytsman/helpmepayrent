import React from "react";
import "./item_styles.css";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h2>{this.props.item.itemName}</h2>
        <p>{this.props.item.description}</p>
        <p>Price: {this.props.item.price}</p>
        {/* {this.props.item.images.map((image, index) => (
          <img key={index} src={image} alt={image.alt} />
        ))} */}
        <img src={this.props.item.images[0]} />
      </div>
    );
  }
}

export default Item;
