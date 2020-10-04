class Character {
  constructor(name) {
    this.name = name;
    this.isClicked = false;
    this.image = process.env.PUBLIC_URL + `/images/${this.name}.jpg`;
  }
}

const characterNames = [
  "beast",
  "black-widow",
  "deadpool",
  "gambit",
  "ghost-rider",
  "magneto",
  "punisher",
  "quicksilver",
  "rogue",
  "ultron",
  "venom",
  "wolverine",
];

const characters = characterNames.map((character) => {
  return new Character(character);
});

export { characters };
