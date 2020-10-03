import TeamsMap from "./Teams.js";

/*
    id will allow us to identify which game is chosen
    name will allow us to identify the game by like date or superbowl
    winner/loser will be an object with the team that won/lost and their score
*/
class Game {
  constructor(id, name, winner, loser) {
    this.id = id;
    this.name = name;
    this.winner = winner;
    this.loser = loser;
  }
}

// maps game id to game
let GamesMap = new Map();

GamesMap.set(
  "id",
  new Game(
    "id",
    "name",
    { team: TeamsMap.get("winnerid"), score: 0 },
    { team: TeamsMap.get("loserid"), score: 0 }
  )
);

export default GamesMap;
