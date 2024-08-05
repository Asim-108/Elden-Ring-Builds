import bullGoatsTalisman from "./talismanAssets/Bull-Goat's Talisman.png";
import carianFinigreedCrest from "./talismanAssets/Carian Filigreed Crest.png";
import dragoncrestGreatShieldTalisman from "./talismanAssets/Dragoncrest Greatshield Talisman.png";
import godfreyIcon from "./talismanAssets/Godfrey Icon.png";
import gravenMassTalisman from "./talismanAssets/Graven-Mass Talisman.png";
import greenTurtleTalisman from "./talismanAssets/Green Turtle Talisman.png";
import lordOfBloodsExultation from "./talismanAssets/Lord of Blood's Exultation.png";
import magicScorpionCharm from "./talismanAssets/Magic Scorpion Charm.png";
import ritualSwordTalisman from "./talismanAssets/Ritual Sword Talisman.png";
import rottenWingedSwordInsignia from "./talismanAssets/Rotten Winged Sword Insignia.png";
import shardOfAlexander from "./talismanAssets/Shard of Alexander.png";

export default function getTalisman(talisman: string | undefined) {
    switch (talisman) {
        case "Bull-Goat's Talisman":
            return bullGoatsTalisman;
        case "Carian Filigreed Crest":
            return carianFinigreedCrest;
        case "Dragoncrest Greatshield Talisman":
            return dragoncrestGreatShieldTalisman;
        case "Godfrey Icon":
            return godfreyIcon;
        case "Graven Mass Talisman":
            return gravenMassTalisman;
        case "Green Turtle Talisman":
            return greenTurtleTalisman;
        case "Lord of Blood's Exultation":
            return lordOfBloodsExultation;
        case "Magic Scorpion Charm":
            return magicScorpionCharm;
        case "Ritual Sword Talisman":
            return ritualSwordTalisman;
        case "Rotten Winged Insignia":
            return rottenWingedSwordInsignia;
        case "Shard of Alexander":
            return shardOfAlexander;
        default:
            return null;
    }
}
