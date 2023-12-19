console.log('Advanced debugging example running.')
debugger

function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  const team = game.home.teamName === teamName ? "home" : "away";
  return Object.values(game[team].players).map(player => player.number);
}

function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let playerWithLargestShoe = null;
  let largestShoeSize = 0;

  for (const team in game) {
    for (const player in game[team].players) {
      const currentShoeSize = game[team].players[player].shoe;
      if (currentShoeSize > largestShoeSize) {
        largestShoeSize = currentShoeSize;
        playerWithLargestShoe = player;
      }
    }
  }

  return game.home.players[playerWithLargestShoe].rebounds;
}

// Advanced debugging example
// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop throughout this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

goodPractices()
