import dexterityKnotCrystalTear from "./tearAssets/Dexterity-knot Crystal Tear.png";
import flameShroudingCrackedTear from "./tearAssets/Flame-Shrouding Cracked Tear.png";
import greenburstCrystalTear from "./tearAssets/Greenburst Crystal Tear.png";
import holyShroudingCrackedTear from "./tearAssets/Holy-Shrouding Cracked Tear.png";
import lightningShroudingCrackedTear from "./tearAssets/Lightning-Shrouding Cracked Tear.png";
import magicShroudingCrackedTear from "./tearAssets/Magic-Shrouding Cracked Tear.png";
import opalineHardtear from "./tearAssets/Opaline Hardtear.png";
import stonebarbCrackedTear from "./tearAssets/Stonebarb Cracked Tear.png";
import thornyCrackedTear from "./tearAssets/Thorny Cracked Tear.png";

let placeholder = "/placeholder.png";

export default function getTear(tear: string | undefined) {
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