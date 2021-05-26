// change variable and function names due to linter and viaJs.js

interface IGame {
  winner: string, 
  loser: string, 
  losersScore: number
}

const gameArrTs = [
  { winner: 'Alice', loser: 'Bob', losersScore: 2 },
  { winner: 'Alice', loser: 'Dean', losersScore: 3 },
  { winner: 'Elise', loser: 'Bob', losersScore: 1 },
  { winner: 'Elise', loser: 'Carol', losersScore: 4 },
  { winner: 'Carol', loser: 'Dean', losersScore: 3 }
];

function getPlayersTs(gameArrTs: IGame[]) {
  const playerArr = [];
  for (const game of gameArrTs) {
    for (const [key, name] of Object.entries(game)) {
      // check specifically for 'winner' and 'loser' in case more keys are 
      // added to the gameArrTs later as future-proofing
      if ((key === 'winner' || key === 'loser') && !playerArr.includes(name)) {
        playerArr.push(name);
      }
    }
  }
  return playerArr;
};

function whoBeatWhoTs(gameArrTs: IGame[]) {
  const newObj = {};
  for (const player of getPlayersTs(gameArrTs)) {
    newObj[player] = [];
  }
  for (const game of gameArrTs) {
    newObj[game.winner].push(game.loser);
  }
  return newObj;
};

console.log(whoBeatWhoTs(gameArrTs));