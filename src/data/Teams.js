class Team {
  constructor(id, name, colors) {
    this.id = id;
    this.name = name;
    this.colors = colors;
  }
}

// maps team id to Team
let TeamsMap = new Map();

TeamsMap.set("id", new Team("id", "name", { color1: "", color2: "" }));

export default TeamsMap;
