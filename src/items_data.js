import sailor_northern_lights from "./images/sailor_northern_lights.jpg";
import sailor_cranberry from "./images/sailor_cranberry.jpg";
import sailor_cranberry_1 from "./images/sailor_cranberry_1.jpg";
import sailor_cranberry_2 from "./images/sailor_cranberry_2.jpg";
import apple_magic_keyboard_1 from "./images/apple_magic_keyboard_1.jpg";
import apple_magic_keyboard_2 from "./images/apple_magic_keyboard_2.jpg";
import keychron_k3_1 from "./images/keychron_k3_1.jpg";
import keychron_k3_2 from "./images/keychron_k3_2.jpg";

const items = [
  {
    id: 1,
    price: 250,
    type: "Fountain Pen",
    itemName: "Sailor Pro Gear Northern Lights Purple",
    description: "21k Broad nib. Afaik not available from goulet pens anymore.",
    images: [sailor_northern_lights],
  },
  {
    id: 2,
    price: 200,
    type: "Fountain Pen",
    itemName: "Sailor 1911L Sparkling Cranberry",
    description: "21k Music nib",
    images: [sailor_cranberry, sailor_cranberry_1, sailor_cranberry_2],
  },
  {
    id: 3,
    price: 40,
    type: "Keyboard",
    itemName: "Apple Magic Keyboard",
    description: "in perfect working order, some minor signs of use",
    images: [apple_magic_keyboard_1, apple_magic_keyboard_2],
  },
  {
    id: 4,
    price: 60,
    type: "Keyboard",
    itemName: "Keychron K3 Pro",
    description:
      "This is the non hot swappable version. White backlight, brown low profile switches. Perfect condition and it comes with the box",
    images: [keychron_k3_1, keychron_k3_2],
  },
];

export default items;
