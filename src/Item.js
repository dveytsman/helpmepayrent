import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.description}</p>
        <p>Price: {this.props.item.price}</p>
        <img src={this.props.item.images[0]} />
      </div>
    );
  }
}

export default Item;
