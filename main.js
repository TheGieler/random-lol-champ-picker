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

const randomChamps = [];
let userChamp = null;

for (let i = 1; i <= 3; i++) {
  randomChampPicker(randomChamps);
}

function randomChampPicker(arr) {
  let randomChamp = champsList[randomNumber(champsList)].name;
  if (arr.includes(randomChamp)) {
    randomChampPicker(randomChamps);
  } else {
    randomChamps.push(randomChamp);
  }
}

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askQuestion();

function askQuestion() {
  rl.question(
    `Your champs are ${randomChamps.join(", ")} please pick one. \n`,
    function (answer) {
      if (randomChamps.includes(answer)) {
        userChamp = answer;
        console.log(`You picked ${userChamp} and this are your runes \n`);
        rl.close();
      } else {
        console.error("Please check for a typo");
        askQuestion();
      }
    }
  );
}
