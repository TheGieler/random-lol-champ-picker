// Data

const champsList = [
  {
    name: "Annie",
    roles: ["Mage"],
  },
  {
    name: "Riven",
    roles: ["Fighter", "Assasin"],
  },
  {
    name: "Olaf",
    roles: ["Tank", "Fighter"],
  },
  {
    name: "Galio",
    roles: ["Mage", "Tank"],
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
    roles: ["Mage", "Assassin"],
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

// Variablen

let userChampInput = null;

let userChampObject = null;

let userChampIndex = null;

const randomChamps = [];
const randomChampsName = [];
const randomStats = [];

let primaryTree = null;
const randomPrimaryRunes = [];

let secondaryTree = null;
const randomSecondaryRunes = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Loops

for (let i = 1; i <= 3; i++) {
  randomChampPicker(randomChamps);
}

for (let i = 0; i <= 2; i++) {
  randomStats.push(stats[i][randomNumber(stats)]);
}

for (let i = 0; i <= 2; i++) {
  randomChampsName.push(randomChamps[i].name);
}

// Start

askQuestion();

function askQuestion() {
  rl.question(
    `Your champs are ${randomChampsName.join(", ")} please pick one. \n`,
    function (answer) {
      if (randomChampsName.includes(answer)) {
        userChampInput = answer;
        console.log(`You picked ${userChampInput} and this are your runes \n`);
        userChampObject = champsList.find(
          (champ) => champ.name === userChampInput
        );
        userChampIndex = champsList.findIndex((champ) => {
          return champ.name === userChampInput;
        });

        randomPrimaryTree();

        console.log(`Your runetree ${runeTrees[primaryTree].name}`);

        for (let i = 0; i <= 3; i++) {
          randomPrimaryRunes.push(
            runeTrees[primaryTree].rows[i][
              randomNumber(runeTrees[primaryTree].rows[i])
            ]
          );
        }

        console.log(` ${randomPrimaryRunes}  \n \n`);

        randomSecondaryTree();

        for (let i = 0; i <= 1; i++) {
          randomSecondaryRunes.push(
            runeTrees[secondaryTree].rows[i][
              randomNumber(runeTrees[secondaryTree].rows[i])
            ]
          );
        }

        console.log(` ${randomSecondaryRunes}  \n`);

        console.log(`Also your random stats are \n \n ${randomStats} \n \n`);

        rl.close();
      } else {
        console.error("Please check for a typo");
        askQuestion();
      }
    }
  );
}

// Functions

function randomChampPicker(arr) {
  let randomChamp = champsList[randomNumber(champsList)];
  if (arr.includes(randomChamp)) {
    randomChampPicker(randomChamps);
  } else {
    randomChamps.push(randomChamp);
  }
}

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomPrimaryTree() {
  primaryTree = randomNumber(runeTrees);
  roleCheck(primaryTree, randomPrimaryTree);
}

function randomSecondaryTree() {
  secondaryTree = randomNumber(runeTrees);
  if (secondaryTree === primaryTree) {
    randomSecondaryTree();
  }
}

function roleCheck(tree, func) {
  const runeRoles = runeTrees[tree].roles;
  const champRoles = champsList[userChampIndex].roles;

  if (champRoles.some((champRole) => runeRoles.includes(champRole))) {
    func();
  }
}

// Lang

// const runeRoles = runeTrees[0].roles;
// const champRoles = champsList[0].roles;

// function checkRole(func) {
//   for (let i = 0; i < champRoles.length; i++) {
//     const champRole = champRoles[i];

//     for (let j = 0; j < runeRoles.length; j++) {
//       const runeRole = runeRoles[j];

//       if (champRole === runeRole) {
//         func();
//       }
//     }
//   }
// }

// Kurz

// const champRoles = champsList[0].roles;

// const champHasMatchingRunes3 = champRoles.some((champRole) =>
//   runeRoles.includes(champRole)
// );
