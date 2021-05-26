gameArr = [
  { winner: 'Alice', loser: 'Bob', losersScore: 2 },
  { winner: 'Alice', loser: 'Dean', losersScore: 3 },
  { winner: 'Elise', loser: 'Bob', losersScore: 1 },
  { winner: 'Elise', loser: 'Carol', losersScore: 4 },
  { winner: 'Carol', loser: 'Dean', losersScore: 3 }
];

function getPlayers(gameArr) {
  const playerArr = [];
  for (const game of gameArr) {
    for (const [key, name] of Object.entries(game)) {
      // check specifically for 'winner' and 'loser' in case more keys are 
      // added to the gameArr later as future-proofing
      if ((key === 'winner' || key === 'loser') && !playerArr.includes(name)) {
        playerArr.push(name);
      }
    }
  }
  return playerArr;
};

function whoBeatWho(gameArr) {
  const newObj = {};
  for (const player of getPlayers(gameArr)) {
    newObj[player] = [];
  }
  for (const game of gameArr) {
    newObj[game.winner].push(game.loser);
  }
  return newObj;
};

console.log(whoBeatWho(gameArr));
