const champList = [
  "Annie",
  "Rammus",
  "Darius",
  "Diana",
  "Leona",
  "Maokai",
  "Ivern",
  "Rengar",
];

const runes = [
  [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
];

const stats = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const randomRunes = {
  hauptbaum: [1, 2, 3, 4, 5],
  hauptbaumrunen: [1, 2, 3, 4],
  nebenzweig: [1, 2, 3, 4, 5],
  nebenzweigrunen: [1, 2],
  stats: [1, 2, 3],
};

const firstChamp = Math.floor(Math.random() * champList.length);
const secondChamp = Math.floor(Math.random() * champList.length);
const thirdChamp = Math.floor(Math.random() * champList.length);

// console.log(
//   champList[firstChamp] +
//     " " +
//     champList[secondChamp] +
//     " " +
//     champList[thirdChamp]
// );

function rng() {
  return Math.floor(Math.random() * Array.length);
}
