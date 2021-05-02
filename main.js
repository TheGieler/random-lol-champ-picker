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
      randomChamps: [],
      selectedChamp: null,
      primaryRuneTree: null,
      primaryRunes: [],
      secondaryRuneTree: null,
      secondaryRunes: [],
      stats: [],
    };
    playersData.push(playerDataObject);
  }
  return playersData;
};

const randomChampGenerator = () => {
  let randomChamp = champsList[randomNumber(champsList.length)];
  return randomChamp;
};

const createRandomChampsArray = (i, currentPlayer) => {
  const randomChamp = randomChampGenerator();
  if (currentPlayer.randomChamps.find((a) => a.name === randomChamp.name)) {
    createRandomChampsArray(i, currentPlayer);
  } else {
    currentPlayer.randomChamps.push(randomChamp);
    if (currentPlayer.randomChamps.length < 3) {
      createRandomChampsArray(i, currentPlayer);
    }
  }
};

const main = async () => {
  const playerCount = await askForPlayers();
  const playersData = await createPlayerData(playerCount);
  console.log(playersData);
};
main();
