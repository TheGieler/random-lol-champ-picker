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

const askForChamp = async (i, currentPlayer) => {
  const randomChampsArray = [];
  currentPlayer.randomChamps.forEach((c) => randomChampsArray.push(c.name));
  const randomChampNames = randomChampsArray.join(", ");
  const userInput = await ask(
    `${currentPlayer.playerNumber} your randoms champs are ${randomChampNames} please pick one! \n`
  );
  if (currentPlayer.randomChamps.find((c) => c.name === userInput)) {
    const selectedChamp = currentPlayer.randomChamps.find(
      (c) => c.name === userInput
    );
    currentPlayer.selectedChamp = selectedChamp;
  } else {
    console.log("Please check your input! \n");
    return await askForChamp(i, currentPlayer);
  }
};

const selectPrimaryRuneTree = (i, currentPlayer) => {
  const primaryTree = runeTrees[randomNumber(runeTrees.length)];
  currentPlayer.primaryRuneTree = primaryTree;
  checkRoles(i, currentPlayer);
};

const checkRoles = (i, currentPlayer) => {
  const champ = currentPlayer.selectedChamp;
  const primaryRuneTree = currentPlayer.primaryRuneTree;
  if (champ.roles.some((a) => primaryRuneTree.roles.includes(a))) {
    selectPrimaryRuneTree(i, currentPlayer);
  }
};

const pickPrimaryRunes = (i, currentPlayer) => {
  const primaryRuneTree = currentPlayer.primaryRuneTree.rows;
  const primaryRunes = currentPlayer.primaryRunes;
  primaryRuneTree.forEach((r) => primaryRunes.push(r[randomNumber(r.length)]));
};

const selectSecondaryRuneTree = (i, currentPlayer) => {
  const primaryRuneTree = currentPlayer.primaryRuneTree.name;
  const secondaryTree = runeTrees[randomNumber(runeTrees.length)];
  if (primaryRuneTree === secondaryTree.name) {
    selectSecondaryRuneTree(i, currentPlayer);
  } else {
    currentPlayer.secondaryRuneTree = secondaryTree;
  }
};

const pickSecondaryRunes = (i, currentPlayer) => {
  const secondaryTree = currentPlayer.secondaryRuneTree.rows;
  for (let i = 0; i < 2; i++) {
    currentPlayer.secondaryRunes.push(
      secondaryTree[randomNumber(secondaryTree.length)][randomNumber(3)]
    );
  }
};

const pickStats = (i, currentPlayer) => {
  const playerStats = currentPlayer.stats;
  stats.forEach((s) => playerStats.push(s[randomNumber(3)]));
};

const main = async () => {
  const playerCount = await askForPlayers();
  const playersData = createPlayerData(playerCount);
  for (let i = 0; i < playerCount; i++) {
    createRandomChampsArray(i, playersData[i]);
    await askForChamp(i, playersData[i]);
    selectPrimaryRuneTree(i, playersData[i]);
    pickPrimaryRunes(i, playersData[i]);
    selectSecondaryRuneTree(i, playersData[i]);
    pickSecondaryRunes(i, playersData[i]);
    pickStats(i, playersData[i]);

    console.log(playersData);
  }
};
main();
