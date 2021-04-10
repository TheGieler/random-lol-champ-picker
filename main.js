const champList = [
  "Annie",
  "Rammus",
  "Darius",
  "Diana",
  "Leona",
  "Maokai",
  "Ivern",
  "Rengar",
];

const randomChamps = [];

for (let i = 1; i <= 3; i++) {
  let randomNumber = null;
  randomNumber = Math.floor(Math.random() * champList.length);
  console.log(champList[randomNumber]);
}

const Trees = {
  Präzision: {
    keyRune: [
      "Fokusierter Angriff",
      "Tödliches Tempo",
      "Leichtfüssigkeit",
      "Eroberer",
    ],
    firstMinorRune: ["Überheilen", "Triumph", "Geistesgegenwart"],
    secondMinorRune: [
      "Legende: Eifer",
      "Legende: Zähigkeit",
      "Legende: Blutdurst",
    ],
    thirdMinorRune: ["Gnadentoss", "Niedermäher", "Letztes Gefecht"],
  },
  Zauberei: {
    keyRune: ["Benefee Beschwörung", "Akaner Komet", "Phasenrausch"],
    firstMinorRune: ["Kugel der Aufhebung", "Manafluss", "Nimbus-Umhang"],
    secondMinorRune: ["Überlegenheit", "Flinkheit", "Absuluter Fokus"],
    thirdMinorRune: ["Hitzewelle", "Wasserlauf", "Aufziehender Sturm"],
  },
};

const stats = [
  ["AD/AP", "Attack Speed", "Ability Haste"],
  ["AD/AP", "Armor", "Magic Resist"],
  ["Life", "Armor", "Magic Resist"],
];

const randomMainTree = {
  keyRune: "",
  firstMinorRune: "",
  secondMinorRune: "",
  thirdMinorRune: "",
};
const randomSubTree = {
  firstMinorRune: "",
  secondMinorRune: "",
};

const firstChamp = Math.floor(Math.random() * champList.length);
const secondChamp = Math.floor(Math.random() * champList.length);
const thirdChamp = Math.floor(Math.random() * champList.length);
