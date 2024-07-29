const darkmoonGreatsword = {
  weapon: "Dark Moon Greatsword",
  armour: "Spellblade Armour Set",
  talisman1: "Shard of Alexander",
  talisman2: "Godfrey Icon",
  talisman3: "Dragoncrest Greatshield",
  talisman4: "Magic Scorpion Charm",
  physick1: "Magic-shrouding Cracked Tear",
  physick2: "Greenburst Crystal Tear",
  vigor: 50,
  mind: 50,
  endurance: 50,
  strength: 50,
  dexterity: 50,
  intelligence: 50,
  faith: 50,
  arcane: 50,
};

const deathsPoker = {
  weapon: "Deaths Poker",
  armour: "Spellblade Armour Set",
  talisman1: "Shard of Alexander",
  talisman2: "Graven Mass Talisman",
  talisman3: "Dragoncrest Greatshield",
  talisman4: "Magic Scorpion Charm",
  physick1: "Magic-shrouding Cracked Tear",
  physick2: "Greenburst Crystal Tear",
  vigor: 50,
  mind: 50,
  endurance: 50,
  strength: 50,
  dexterity: 50,
  intelligence: 50,
  faith: 50,
  arcane: 50,
};

const gutsSword = {
  weapon: "Guts Greatsword",
  armour: "Crucible/Bullgoat Armour Set",
  talisman1: "Shard of Alexander",
  talisman2: "Bullgoat Talisman",
  talisman3: "Dragoncrest Greatshield",
  talisman4: "Ritual Sword Talisman",
  physick1: "Magic-shrouding Cracked Tear",
  physick2: "Greenburst Crystal Tear",
  vigor: 50,
  mind: 50,
  endurance: 50,
  strength: 50,
  dexterity: 50,
  intelligence: 50,
  faith: 50,
  arcane: 50,
};

function buildStructs(stat: string | undefined) {
  let validBuilds;
  switch (stat) {
    case "int": {
      validBuilds = [darkmoonGreatsword, deathsPoker];
      break;
    }
    case "str": {
      validBuilds = [gutsSword];
      break;
    }
    default: {
      validBuilds = undefined;
      break;
    }
  }
  return validBuilds;
}

export default buildStructs;
