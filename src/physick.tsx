import dexterityKnotCrystalTear from "./physickAssets/Dexterity-knot Crystal Tear.png";
import flameShroudingCrackedTear from "./physickAssets/Flame-Shrouding Cracked Tear.png";
import greenburstCrystalTear from "./physickAssets/Greenburst Crystal Tear.png";
import holyShroudingCrackedTear from "./physickAssets/Holy-Shrouding Cracked Tear.png";
import lightningShroudingCrackedTear from "./physickAssets/Lightning-Shrouding Cracked Tear.png";
import magicShroudingCrackedTear from "./physickAssets/Magic-Shrouding Cracked Tear.png";
import opalineHardtear from "./physickAssets/Opaline Hardtear.png";
import stonebarbCrackedTear from "./physickAssets/Stonebarb Cracked Tear.png";
import thornyCrackedTear from "./physickAssets/Thorny Cracked Tear.png";

let placeholder = "/placeholder.png";

export default function getPhysick(tear: string | undefined) {
  switch (tear) {
    case "Dexterity-knot Crystal Tear":
      return dexterityKnotCrystalTear;
    case "Flame-Shrouding Cracked Tear":
      return flameShroudingCrackedTear;
    case "Greenburst Crystal Tear":
      return greenburstCrystalTear;
    case "Holy-Shrouding Cracked Tear":
      return holyShroudingCrackedTear;
    case "Lightning-Shrouding Cracked Tear":
      return lightningShroudingCrackedTear;
    case "Magic-Shrouding Cracked Tear":
      return magicShroudingCrackedTear;
    case "Opaline Hardtear":
      return opalineHardtear;
    case "Stonebarb Cracked Tear":
      return stonebarbCrackedTear;
    case "Thorny Cracked Tear":
      return thornyCrackedTear;
    default:
      return placeholder;
  }
}
