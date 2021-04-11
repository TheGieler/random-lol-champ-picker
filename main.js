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

const Trees = [
  [
    ["Fokusierter Angriff", "Tödliches Tempo", "Leichtfüssigkeit", "Eroberer"],
    ["Überheilen", "Triumph", "Geistesgegenwart"],
    ["Legende: Eifer", "Legende: Zähigkeit", "Legende: Blutdurst"],
    ["Gnadentoss", "Niedermäher", "Letztes Gefecht"],
  ],
  [
    ["Benefee Beschwörung", "Akaner Komet", "Phasenrausch"],
    ["Kugel der Aufhebung", "Manafluss", "Nimbus-Umhang"],
    ["Überlegenheit", "Flinkheit", "Absuluter Fokus"],
    ["Hitzewelle", "Wasserlauf", "Aufziehender Sturm"],
  ],
];

console.log("Das sind deine Runen:");

let randomMain = null;
randomMain = Math.floor(Math.random() * Trees.length);

for (let i = 0; i <= 3; i++) {
  randomMainMinor = null;
  randomMainMinor = Math.floor(Math.random() * 3);
  console.log(Trees[randomMain][i][randomMainMinor]);
}

console.log("Das sind deine Subrunen:");

let runesSub = null;
runesSub = Math.floor(Math.random() * Trees.length);

for (let i = 0; i <= 1; i++) {
  randomSubMinor = null;
  randomSubMinor = Math.floor(Math.random() * 3);
  console.log(Trees[runesSub][i][randomSubMinor]);
}

const stats = [
  ["AD/AP", "Attack Speed", "Ability Haste"],
  ["AD/AP", "Armor", "Magic Resist"],
  ["Life", "Armor", "Magic Resist"],
];

console.log("Deine Random Stats sind:");

for (let i = 1; i <= 3; i++) {
  let randomNumberOne = null;
  randomNumberOne = Math.floor(Math.random() * 3);
  let randomNumberTwo = null;
  randomNumberTwo = Math.floor(Math.random() * 3);
  console.log(stats[randomNumberOne][randomNumberTwo]);
}
