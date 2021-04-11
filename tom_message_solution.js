const CHAMP_LIST = [
  "Annie",
  "Rammus",
  "Darius",
  "Diana",
  "Leona",
  "Maokai",
  "Ivern",
  "Rengar",
];

const RUNE_TREES = [
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
];

const STAT_RUNES = [
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
];

/**
 * @param {number} min
 * @param {number} max
 * @returns number
 */
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * @param {Array<string>} out
 * @returns Array<string>
 */
const tryChooseChamp = (out) => {
  if (out.length === CHAMP_LIST.length) {
    throw new RangeError("out already is the same length as CHAMP_LIST");
  }

  const random = randomBetween(0, CHAMP_LIST.length - 1);

  const newChamp = CHAMP_LIST[random];
  if (out.includes(newChamp)) {
    tryChooseChamp(out);
  } else {
    out.push(newChamp);
  }

  return out;
};

/**
 * @param {Array<{ name: string; rows: string[][]; }>} out
 * @returns Array<{ name: string; rows: string[][]; }>
 */
const tryChooseRuneTree = (out) => {
  if (out.length === RUNE_TREES.length) {
    throw new RangeError("out already is the same length as RUNE_TREES");
  }

  const random = randomBetween(0, RUNE_TREES.length - 1);

  const newTree = RUNE_TREES[random];
  if (out.some((r) => r.name === newTree.name)) {
    tryChooseRuneTree(out);
  } else {
    out.push(newTree);
  }

  return out;
};

/**
 *
 * @param {Array<string>} out
 * @param {Array<string>} runes
 * @returns Array<string>
 */
const selectRunes = (out, runes) => {
  for (const row of runes) {
    const random = randomBetween(0, row.length - 1);
    const rune = row[random];

    out.push(rune);
  }

  return out;
};

/**
 * @type Array<string>
 */
const champsToChooseFrom = [];

for (let i = 0; i < 3; i++) {
  tryChooseChamp(champsToChooseFrom);
}

console.log("Your champs to choose from:");
console.log(champsToChooseFrom);
console.log();

/**
 * @type Array<{ name: string; rows: string[][]; }>
 */
const chosenRuneTrees = [];

for (let i = 0; i < 2; i++) {
  tryChooseRuneTree(chosenRuneTrees);
}

for (const [index, chosenRuneTree] of chosenRuneTrees.entries()) {
  const isPrimary = index === 0;

  /**
   * @type Array<string>
   */
  const runesToUse = [];

  const runes = isPrimary
    ? chosenRuneTree.rows
    : chosenRuneTree.rows.slice(1, 4);
  selectRunes(runesToUse, runes);

  console.log(
    `Your ${isPrimary ? "primary" : "secondary"} rune tree is`,
    chosenRuneTree.name
  );
  console.log("Please use the following configuration", runesToUse);
  console.log();
}

/**
 * @type Array<string>
 */
const chosenStatRunes = [];

for (const row of STAT_RUNES) {
  const random = randomBetween(0, row.length - 1);
  chosenStatRunes.push(row[random]);
}

console.log("Your stat runes are");
console.log(chosenStatRunes);
