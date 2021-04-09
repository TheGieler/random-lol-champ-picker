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

const firstChamp = Math.floor(Math.random() * champList.length);
const secondChamp = Math.floor(Math.random() * champList.length);
const thirdChamp = Math.floor(Math.random() * champList.length);

console.log(
  champList[firstChamp] +
    " " +
    champList[secondChamp] +
    " " +
    champList[thirdChamp]
);
