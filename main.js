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

//Functions

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const randomNumber = (num) => Math.floor(Math.random() * num);

const askForPlayers = async () => {
  const playerCount = Number.parseInt(
    await ask("Please pick your player count! 1-2 Players allowed! \n")
  );
  if (Number.isInteger(playerCount) && playerCount > 0 && playerCount < 3) {
    return playerCount;
  } else {
    console.log("Please check your input \n");
    return await askForPlayers();
  }
};

const createPlayerData = (playerCount) => {
  let playersData = [];
  for (let i = 1; i <= playerCount; i++) {
    let playerDataObject = {
      playerNumber: `Player ${i}`,
      selectedChamp: null,
      primaryRuneTree: null,
      primaryRunes: null,
      secondaryRuneTree: null,
      secondaryRunes: null,
      stats: null,
    };
    playersData.push(playerDataObject);
  }
  return playersData;
};

const randomChampGenerator = () => {
  let randomChamp = champsList[randomNumber(champsList.length)];
  return randomChamp;
};

const main = async () => {};
main();
