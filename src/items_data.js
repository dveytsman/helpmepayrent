const items = [
  {
    id: 3,
    price: 40,
    type: "Keyboard",
    itemName: "Apple Magic Keyboard",
    description: "in perfect working order, some minor signs of use",
    images: [
      "https://i.imgur.com/9mcO90n.jpeg",
      "https://i.imgur.com/9IpzQJd.jpeg",
    ],
  },
  {
    id: 4,
    price: 40,
    type: "Keyboard",
    itemName: "Keychron K3 Pro",
    description:
      "This is the non hot swappable version. White backlight, brown low profile switches. Great condition and it comes with the box",
    images: [
      "https://i.imgur.com/3mjj55y.jpeg",
      "https://i.imgur.com/tLBQMpD.jpeg",
    ],
  },
  {
    id: 5,
    price: 90,
    type: "Keyboard",
    itemName: "Nuphy Air 65V2",
    description:
      "This is in like new condition. I can put any of the following switches in the keyboard: low profile gateron blue switches, low profile gateron brown switches, cowberry switches, moss switches, or wisteria switches",
    images: ["https://i.imgur.com/IjF4QAW.jpg.com/IjF4QAW"],
  },
  {
    id: 6,
    price: 70,
    type: "Fountain Pen",
    itemName: "Benu Euphoria Bourbon",
    description:
      "Like new condition. The clip is spring loaded and the  fine #6 Schmidt nib is really smooth",
    images: ["https://i.imgur.com/TEaLFKA.jpeg"],
  },
  {
    id: 7,
    price: 120,
    type: "Fountain Pen",
    itemName: "Opus 88 Jazz Blue with gold flex nib",
    description:
      "This is an Opus 88 in great condition. It is currently equipped with a 14kt ultraflex nib and ebonite feed in a jowo nib unit. Will sell for 70 with any other regular #6 sized nib. Other nib styles available upon request (stacked, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/LU41vdb.jpeg"],
  },
  {
    id: 8,
    price: 40,
    type: "Fountain Pen",
    itemName: "Platinum Curidas Grey M",
    description:
      "This is in like new condition. Comes with the converter and an ink cartridge. Equipped with a medium nib.",
    images: [
      "https://i.imgur.com/5g6VPZ2.jpeg",
      "https://i.imgur.com/NKm2Z8A.jpeg",
    ],
  },
  {
    id: 9,
    price: 40,
    type: "Fountain Pen",
    itemName: "Platinum Curidas Teal F",
    description:
      "This is in like new condition. Comes with the converter and an ink cartridge. Equipped with a Fine nib",
    images: [
      "https://i.imgur.com/ziUzDl9.jpeg",
      "https://i.imgur.com/9Nqvlns.jpeg",
    ],
  },
  {
    id: 10,
    price: 90,
    type: "Fountain Pen",
    itemName: "Edison Collier Azure Skies",
    description:
      "Edison Pen Co. Collier in Azure skies. Great condition and equipped with an opus 88 1.5 mm italic nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/GwTsc8i.jpeg"],
  },
  {
    id: 11,
    price: 120,
    type: "Fountain Pen",
    itemName: "Edison Collier Blue Macaw LE",
    description:
      "Edison Pen Co. Collier in Blue Macaw. This is a limited edition 28/50. Great condition and equipped with a gold plated steel nib speerpoint and tomahawk mod by Kirk Speer. I can substitute any other regular #6 sized nib ($100). Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: [
      "https://i.imgur.com/7xTnDTl.jpeg",
      "https://i.imgur.com/Fii4ow9.jpeg",
    ],
  },
  {
    id: 12,
    price: 100,
    type: "Fountian Pen",
    itemName: "Esterbrook Estie in Tropical Rain Forest",
    description:
      "Great condition esterbrook estie, standard size. Equiped with a Medium gold plated steel #6 Jowo nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/7aqYHK1.jpeg"],
  },
  {
    id: 13,
    price: 150,
    type: "Fountain Pen",
    itemName: "Esterbrook Estie LE Nebulous plume",
    description:
      "Esterbrook Estie, limited run Nebulous plume. This comes with the original box and ink, as well as the gold plated steel #6 Jowo EF nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/4uGVgIr.jpeg"],
  },
  {
    id: 14,
    price: 110,
    type: "Fountain pen",
    itemName: "Esterbrook Estie OS Aqua",
    description:
      "This is the Esterbrook Estie, the oversized model in Aqua and gold colored clip and trim. It is equipped with an elastic EF Jowo #6 nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/qHtx7JI.jpeg"],
  },
  {
    id: 15,
    price: 100,
    type: "Fountain Pen",
    itemName: "Franklin Christoph Model 66",
    description:
      "There are some signs of use, this is a Franklin Christoph Model 66 in antique glass. The pen is equipped with a FC Broad SIG. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/ytbfjif.jpeg"],
  },
  {
    id: 16,
    price: 100,
    type: "Fountain Pen",
    itemName: "Franklin Christoph, Model p66 in Olivae",
    description:
      "Like new condition Franklin Christoph pocket 66 model. It only takes a cartridge and is equipped with an FC Broad SIG nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: [
      "https://i.imgur.com/MAl8wKu.jpeg",
      "https://i.imgur.com/nN3YXVF.jpeg",
      "https://i.imgur.com/JyEK1Rz.jpeg",
    ],
  },
  {
    id: 17,
    price: 140,
    type: "Fountain Pen",
    itemName: "Gravitas Sentry in Black Delrin w/ gold ultraflex nib",
    description:
      "Gravitas Sentry in black delrin. It is equipped with a gold ultraflex nib unit from fountain pen revolution. I can substitute any other regular #6 sized nib, will take off $40. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/dWGIeEh.jpeg"],
  },
  {
    id: 18,
    price: 100,
    type: "Fountain Pen",
    itemName: "Gravitas Entry, flex nib",
    description:
      'Gravitas Entry in dark green. is equipped with an "enlisted flex" semi flex nib and ebonite feed from penrealm. I can substitute any other regular #6 sized nib, will take off $20. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)',
    images: ["https://i.imgur.com/ffihaqF.jpeg"],
  },
  {
    id: 19,
    price: 70,
    type: "Fountain Pen",
    itemName: "Gravitas Flagship",
    description:
      "Gravitas flagship with a steel grip section. Is equipped with added tuning for extra ink flow and a small amount of bounce. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/yz2Tgyy.jpeg"],
  },
  {
    id: 20,
    price: 75,
    type: "Fountain pen",
    itemName: "Gravitas Flagship Black Skull",
    description:
      "This pen is a steel black flagship model, in a skull pattern. It is equipped with a standard Jowo #6 medium steel nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/AabNjqJ.jpeg"],
  },
  {
    id: 21,
    price: 65,
    type: "Fountain Pen",
    itemName: "Gravitas Flagship brass in skull pattern some cosmetic damage",
    description:
      "This is a Gravitas flagship model in raw brass with a skull pattern. The damage is to the section. It was done to add more texture to the section for added grip. Equipped with a standard Jowo #6 Medium nib. I can substitute any other regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/2n965xr.jpeg"],
  },
  {
    id: 22,
    price: 55,
    type: "Fountain pen",
    itemName:
      "Gravitas Flagship in white cerakote and a steel pvd black section",
    description:
      "Gravitas Flagship in white cerakote and a steel pvd black section. some of the finish has some surface scratches but fully functional. I can put in any regular #6 sized nib. Other nib styles available upon request (stacked, fude, concord, italic, music, flex (multiple different flex nib units) price varies)",
    images: ["https://i.imgur.com/dTtnRn0.jpeg"],
  },
  {
    id: 23,
    price: 90,
    type: "Keyboard",
    itemName: "Nuphy Air 65V2",
    description:
      "This is in like new condition. I can put any of the following switches in the keyboard: low profile gateron blue switches, low profile gateron brown switches, cowberry switches, moss switches, or wisteria switches",
    images: [
      "https://i.imgur.com/dTtnRn0.jpeg",
      "https://i.imgur.com/4tWJ1oT.jpeg",
    ],
  },
  {
    id: 24,
    price: 90,
    type: "Keyboard",
    itemName: "Nuphy Air 65V2",
    description:
      "This is in like new condition. I can put any of the following switches in the keyboard: low profile gateron blue switches, low profile gateron brown switches, cowberry switches, moss switches, or wisteria switches",
    images: ["https://i.imgur.com/qHLFj6A.jpeg"],
  },
];

export default items;
