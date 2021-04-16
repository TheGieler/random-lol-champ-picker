const champs = [
    "Annie",
    "Rammus",
    "Darius",
    "Diana",
    "Leona",
    "Maokai",
    "Ivern",
    "Rengar",
  ],
  runes = [
    {
      name: "Precision",
      rows: [
        ["A", "B", "C"],
        ["a", "b", "c"],
        ["a", "b", "c"],
        ["a", "b", "c"],
      ],
    },
    {
      name: "Sorcery",
      rows: [
        ["A", "B", "C", "D"],
        ["a", "b", "c"],
        ["a", "b", "c"],
        ["a", "b", "c"],
      ],
    },
    {
      name: "Foo",
      rows: [
        ["A", "B"],
        ["a", "b", "c"],
        ["a", "b", "c", "d"],
        ["a", "b", "c"],
      ],
    },
    {
      name: "Bar",
      rows: [
        ["A", "B", "C", "D", "E"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b"],
      ],
    },
  ],
  stats = [
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
  ],
  randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  chooseChamp = (arr) => {
    if (arr.length === champs.length) {
      throw new RangeError("out already is the same length as CHAMP_LIST");
    }

    const randomChampIndex = randomNumber(0, champs.length - 1),
      randomChamp = champs[randomChampIndex];
    arr.includes(randomChamp) ? chooseChamp(arr) : arr.push(randomChamp);
    return arr;
  },
  chooseRuneTree = (arr) => {
    if (arr.length === runes.length) {
      throw new RangeError("out already is the same length as RUNE_TREES");
    }

    const runeTreeIndex = randomNumber(0, runes.length - 1),
      runeTree = runes[runeTreeIndex];

    arr.some((tree) => tree.name === runeTree.name)
      ? chooseRuneTree(arr)
      : arr.push(runeTree);
    return arr;
  },
  randomRunePicker = (randomRunes, runeTreeRows) => {
    for (const row of runeTreeRows) {
      const rune = row[randomNumber(0, row.length - 1)];
      randomRunes.push(rune);
    }
    return randomRunes;
  },
  randomChampArr = [];
for (let i = 0; i < 3; i++) {
  chooseChamp(randomChampArr);
}
console.log("Your champs to choose from:"),
  console.log(randomChampArr),
  console.log(" ");
const randomRunesTrees = [];
for (let i = 0; i < 2; i++) {
  chooseRuneTree(randomRunesTrees);
}
for (const [index, value] of randomRunesTrees.entries()) {
  const isPrimary = 0 === index,
    emptyArr = [];
  randomRunePicker(emptyArr, isPrimary ? value.rows : value.rows.slice(1, 4)),
    console.log(
      `Your ${isPrimary ? "primary" : "secondary"} rune tree is`,
      value.name
    ),
    console.log("Please use the following configuration", emptyArr),
    console.log(" ");
}
const randomStatsArr = [];
for (const row of stats) {
  const stat = randomNumber(0, row.length - 1);
  randomStatsArr.push(row[stat]);
}
console.log("Your stat runes are"), console.log(randomStatsArr);
