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

console.log("Deine Random Champs sind:");

for (let i = 1; i <= 3; i++) {
  let randomNumber = null;
  randomNumber = Math.floor(Math.random() * champList.length);
  console.log(champList[randomNumber]);
}

const stats = [
  ["AD/AP", "Attack Speed", "Ability Haste"],
  ["AD/AP", "Armor", "Magic Resist"],
  ["Life", "Armor", "Magic Resist"],
];

const randomStats = [];

for (let i = 1; i <= 3; i++) {
  let randomNumberOne = null;
  randomNumberOne = Math.floor(Math.random() * 3);
  let randomNumberTwo = null;
  randomNumberTwo = Math.floor(Math.random() * 3);
  console.log(stats[randomNumberOne][randomNumberTwo]);
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
