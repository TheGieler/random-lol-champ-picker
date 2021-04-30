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

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const askForPlayers = async () => {
  const playerCount = await ask(
    "Please pick your player count! 1-3 Players allowed! \n"
  );
  console.log(playerCount);
};

const main = () => {};
main();

// Start

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
