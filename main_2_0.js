const champsList = [
  {
    name: "Annie",
    rolls: ["Mage"],
  },
  {
    name: "Riven",
    rolls: ["Fighter"],
  },
  {
    name: "Olaf",
    rolls: ["Tank", "Fighter"],
  },
  {
    name: "Galio",
    rolls: ["Mage", "Tank"],
  },
];

const randomChamps = [];

for (let i = 1; i <= 3; i++) {
  let champName = champsList[randomNumber(champsList)].name;
  randomChamps.push(champName);
  console.log(randomChamps);
}

const runeTrees = [
  {
    name: "A",
    keyRune: ["A", "B", "C", "D"],
    minorRuneRows: [
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
  },
  {
    name: "B",
    keyRune: ["A", "B", "C", "D"],
    minorRuneRows: [
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
  },
  {
    name: "C",
    keyRune: ["A", "B", "C"],
    minorRuneRows: [
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
  },
];

const stats = [
  ["A", "B", "C"],
  ["A", "B", "C"],
  ["A", "B", "C"],
];

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}
