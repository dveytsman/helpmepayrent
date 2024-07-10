import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./item_styles.css";

const Popup = ({ isOpen, onRequestClose, item }) => {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button onClick={onRequestClose}>Close</button>
      <Carousel>
        {item.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </Modal>
  );
};

export default Popup;
