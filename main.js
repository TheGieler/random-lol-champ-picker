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

const runes = [
  [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
];

const stats = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const randomRunes = {
  mainTree: "Dominaz",
  mainTreeRunes: {
    keyRune: "",
    firstMinorRune: "",
    secondMinorRune: "",
    thirdMinorRune: "",
  },
  offTree: "Zauberei",
  offTreeRunes: {
    firstMinorRune: "",
    secondMinorRune: "",
  },
  stats: {
    firstStat: "",
    secondStat: "",
    thirdStat: "",
  },
};

const firstChamp = Math.floor(Math.random() * champList.length);
const secondChamp = Math.floor(Math.random() * champList.length);
const thirdChamp = Math.floor(Math.random() * champList.length);

function rng() {
  return Math.floor(Math.random() * this.length);
}
