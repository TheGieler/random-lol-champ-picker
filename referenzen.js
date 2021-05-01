// Lang

const runeRoles = runeTrees[0].roles;
const champRoles = champsList[0].roles;

function checkRole(func) {
  for (let i = 0; i < champRoles.length; i++) {
    const champRole = champRoles[i];

    for (let j = 0; j < runeRoles.length; j++) {
      const runeRole = runeRoles[j];

      if (champRole === runeRole) {
        func();
      }
    }
  }
}

// Kurz

const champRoles = champsList[0].roles;

const champHasMatchingRunes3 = champRoles.some((champRole) =>
  runeRoles.includes(champRole)
);

// Callback Version

function askPlayerCount() {
  rl.question(
    "How many player want to play? Please writte a number that is not bigger than 3! \n",
    function (answer) {
      let answerNumber = parseInt(answer);
      if (Number.isInteger(answerNumber) && answerNumber <= 3) {
        playerCount = answerNumber;
      } else {
        console.log("Your input is not a number or bigger as 3! \n");
        askPlayerCount();
      }
    }
  );
}

// Promise Version

const ask = (quest) => new Promise((resolve) => rl.question(quest, resolve));

const askForPlayer = () => {
  ask(
    "How many player want to play? Please writte a number that is not bigger than 3! \n"
  ).then((answerNumber) => {
    let answerNumber = parseInt(answer);
    if (Number.isNaN(parseInt(answerNumber))) {
      console.log(`${answerNumber} is not a Number please try again \n`);
      askForPlayer();
    } else if (answerNumber > 0 && answerNumber < 4) {
      playerCount = answerNumber;
    } else {
      console.log(
        `${answerNumber} must be bigger than zero and smaller than 4 \n`
      );
      askForPlayer();
    }
  });
};
