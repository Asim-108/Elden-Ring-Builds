// all dynamic assets to import
import placeholder from "./armourAssets/placeholder.png";

// Spellblade Armour Set
import spellbladeHeadGear from "./armourAssets/Spellblade Headgear.png";
import spellbladeChest from "./armourAssets/Spellblade Chest.png";
import spellbladeLegs from "./armourAssets/Spellblade Legs.png";

// Crucible Axe/Bullgoat Armour Set
import crucibleAxeHeadgear from "./armourAssets/Crucible Axe Headgear.png";
import crucibleAxeChest from "./armourAssets/Crucible Axe Chest.png";
import bullgoatLegs from "./armourAssets/Bullgoat Legs.png";

// Briar Armour Set
import briarHeadgear from "./armourAssets/Briar Headgear.png";
import briarChest from "./armourAssets/Briar Chest.png";
import briarLegs from "./armourAssets/Briar Legs.png";

// Ronin Armour Set
import roninHeadgear from "./armourAssets/Ronin Headgear.png";
import roninChest from "./armourAssets/Ronin Chest.png";
import roninLegs from "./armourAssets/Ronin Legs.png";

// Malenia's Armour Set
import maleniaHeadgear from "./armourAssets/Malenia Headgear.png";
import maleniaChest from "./armourAssets/Malenia Chest.png";
import maleniaLegs from "./armourAssets/Malenia Legs.png";

// Land of Reeds Armour Set
import landOfReedsHeadgear from "./armourAssets/Land of Reeds Headgear.png";
import landOfReedsChest from "./armourAssets/Land of Reeds Chest.png";
import landOfReedsLegs from "./armourAssets/Land of Reeds Legs.png";

// Tree Sentinel Armour Set
import treeSentinelHeadGear from "./armourAssets/Tree Sentinel Headgear.png";
import treeSentinelChest from "./armourAssets/Tree Sentinel Chest.png";
import treeSentinelLegs from "./armourAssets/Tree Sentinel Legs.png";

// Blackflame Monk Armour Set
import blackflameMonkHeadgear from "./armourAssets/Blackflame Monk Headgear.png";
import blackflameMonkChest from "./armourAssets/Blackflame Monk Chest.png";
import blackflameMonkLegs from "./armourAssets/Blackflame Monk Legs.png";

// Godskin Noble Hood/Leda's Armour
import godskinNobleHood from "./armourAssets/Godskin Noble Hood Headgear.png";
import ledaChest from "./armourAssets/Leda's Armour Chest.png";
import ledaLegs from "./armourAssets/Leda's Armour Legs.png";

// Black Knife Armour Set
import blackKnifeChest from "./armourAssets/Black Knife Chest.png";
import blackKnifeLegs from "./armourAssets/Black Knife Legs.png";

// Drake Knight Armour Set
import drakeKnightHeadgear from "./armourAssets/Drake Knight Headgear.png";
import drakeKnightChest from "./armourAssets/Drake Knight Chest.png";
import drakeKnightLegs from "./armourAssets/Drake Knight Legs.png";

// Lord of Blood's Set
import lordOfBloodsChest from "./armourAssets/Lord of Blood's Chest.png";
import lordOfBloodsLegs from "./armourAssets/Lord Of Blood's Legs.png";

// White Mask
import whiteMask from "./armourAssets/White Mask Headgear.png";

export default function getArmour(armour: string | undefined) {
  let armourArray = [placeholder, placeholder, placeholder];

  switch (armour) {
    case "Spellblade Armour Set": {
      armourArray[0] = spellbladeHeadGear;
      armourArray[1] = spellbladeChest;
      armourArray[2] = spellbladeLegs;
      break;
    }
    case "Crucible Axe/Bullgoat Armour Set": {
      armourArray[0] = crucibleAxeHeadgear;
      armourArray[1] = crucibleAxeChest;
      armourArray[2] = bullgoatLegs;
      break;
    }
    case "Briar Armour Set": {
      armourArray[0] = briarHeadgear;
      armourArray[1] = briarChest;
      armourArray[2] = briarLegs;
      break;
    }
    case "Ronin Armour Set": {
      armourArray[0] = roninHeadgear;
      armourArray[1] = roninChest;
      armourArray[2] = roninLegs;
      break;
    }
    case "Malenia's Armour Set": {
      armourArray[0] = maleniaHeadgear;
      armourArray[1] = maleniaChest;
      armourArray[2] = maleniaLegs;
      break;
    }
    case "Land of Reeds Armour Set": {
      armourArray[0] = landOfReedsHeadgear;
      armourArray[1] = landOfReedsChest;
      armourArray[2] = landOfReedsLegs;
      break;
    }
    case "Tree Sentinel Armour Set": {
      armourArray[0] = treeSentinelHeadGear;
      armourArray[1] = treeSentinelChest;
      armourArray[2] = treeSentinelLegs;
      break;
    }
    case "Blackflame Monk Armour Set": {
      armourArray[0] = blackflameMonkHeadgear;
      armourArray[1] = blackflameMonkChest;
      armourArray[2] = blackflameMonkLegs;
      break;
    }
    case "Godskin Noble Hood/Leda's Armour": {
      armourArray[0] = godskinNobleHood;
      armourArray[1] = ledaChest;
      armourArray[2] = ledaLegs;
      break;
    }
    case "White Mask/Black Knife Armour Set": {
      armourArray[0] = whiteMask;
      armourArray[1] = blackKnifeChest;
      armourArray[2] = blackKnifeLegs;
      break;
    }
    case "Drake Knight Armour Set": {
      armourArray[0] = drakeKnightHeadgear;
      armourArray[1] = drakeKnightChest;
      armourArray[2] = drakeKnightLegs;
      break;
    }
    case "White Mask/Lord of Blood's Set": {
      armourArray[0] = whiteMask;
      armourArray[1] = lordOfBloodsChest;
      armourArray[2] = lordOfBloodsLegs;
      break;
    }
    default: {
      break;
    }
  }
  return armourArray;
}
