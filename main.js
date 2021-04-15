const champsList = [
  {
    name: "Annie",
    rolls: ["Mage"],
  },
  {
    name: "Riven",
    rolls: ["Fighter", "Assasin"],
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
    rows: [
      ["A", "B", "C", "D"],
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
    roles: ["Fighter"],
  },
  {
    name: "B",
    rows: [
      ["A", "B", "C", "D"],
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
    roles: ["Mage", "Assasin"],
  },
  {
    name: "C",
    rows: [
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
    roles: ["Tank"],
  },
];

const stats = [
  ["A", "B", "C"],
  ["A", "B", "C"],
  ["A", "B", "C"],
];

const randomChamps = [];
const randomStats = [];

for (let i = 0; i <= 2; i++) {
  randomStats.push(stats[i][randomNumber(stats)]);
}

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

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// askQuestion();

// function askQuestion() {
//   rl.question(
//     `Your champs are ${randomChamps.join(", ")} please pick one. \n`,
//     function (answer) {
//       if (randomChamps.includes(answer)) {
//         userChamp = answer;
//         console.log(`You picked ${userChamp} and this are your runes \n`);
//         rl.close();
//       } else {
//         console.error("Please check for a typo");
//         askQuestion();
//       }
//     }
//   );
// }
