import { useState } from "react";
import "./App.css";
import buildStructs from "./buildStructs";
import getArmour from "./armourSets";
import * as Icons from "./assets/index";
import React from "react";
import { getImageURL } from "./talismanAssets/image-util";
import getTalisman from "./talismans";
import getPhysick from "./physick";

function App() {
  // variable keeping track of the current main stat that the user has selected
  const [stat, setStat] = useState<undefined | string>(undefined);

  //variable keeping track of the current weapon that the user has selected
  const [selectedBuild, setSelectedBuild] = useState<undefined | any>(
    undefined
  );

  //array keeping track of builds that are valid based on the selected main stat
  const [validBuilds, setValidBuilds] = useState<undefined | any[]>(undefined);

  //array keeping track of armour set for the build chosen
  const [armourArray, setArmourArray] = useState<any[]>([]);

  // array keeping track of talisman set for the build chosen
  const [talismanArray, setTalismanArray] = useState<any[]>([]);

  // array keeping track of tear set for the build chosen
  const [physickArray, setPhysickArray] = useState<any[]>([]);

  return (
    <body>
      {/* Navigation bar at the top of the website */}
      <div className="navBar">
        {/* logo in top left of nav bar */}
        <div style={{ width: "75%" }}>
          <img
            className="logo"
            src={require("./assets/elden-logo.png")}
            alt="elden logo"
          />
        </div>

        {/* navigation buttons */}
        <a href="#buildSelect" className="buttonMargins">
          <button className="compassButton">
            <Icons.CompassIcon />
          </button>
        </a>

        <a href="#weaponSelect" className="buttonMargins">
          <button className="navButton">
            <Icons.WeaponIcon />
          </button>
        </a>

        <a href="#finalBuild" className="buttonMargins">
          <button className="navButton">
            <Icons.ShieldIcon />
          </button>
        </a>
      </div>

      <div className="eldenBackground">
        <h1 className="quickBuilds">Quick Builds</h1>
        <p className="EldenRing">Elden rinG</p>
        <hr className="line" />
        <h1 className="author">By: Asim</h1>
      </div>

      <br />
      <br />
      <br />

      {/* Choosing build Stat */}

      <div id="buildSelect" className="section">
        <div style={{ display: "flex" }}>
          <div className="sectionIcon">
            <Icons.CompassIcon />
          </div>

          <h1 className="sectionTitle">Choose Build</h1>
        </div>

        <hr className="line" style={{ margin: "25px" }} />

        {/* main buttons for choosing build */}

        {/* set the stat to what user selected, set validBuilds array to builds appropriate for that stat */}

        <div className="centredBuildButtons">
          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("str");
                setValidBuilds(buildStructs("str"));
              }}
            >
              Strength
            </button>
          </a>

          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("dex");
                setValidBuilds(buildStructs("dex"));
              }}
            >
              Dexterity
            </button>
          </a>

          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("int");
                setValidBuilds(buildStructs("int"));
              }}
            >
              Intelligence
            </button>
          </a>
        </div>
        <div className="centredBuildButtons">
          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("fai");
                setValidBuilds(buildStructs("fai"));
              }}
            >
              Faith
            </button>
          </a>

          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("arc");
                setValidBuilds(buildStructs("arc"));
              }}
            >
              Arcane
            </button>
          </a>
        </div>
        <div className="centredBuildButtons">
          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildSelectButton"
              onClick={() => {
                setStat("rand");
                setValidBuilds(buildStructs("rand"));
              }}
            >
              Surprise Me!
            </button>
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* display the valid builds for the stat chosen */}

      {stat && (
        <div id="weaponSelect" className="section oddSection">
          <div style={{ display: "flex" }}>
            <div className="sectionIcon">
              <Icons.WeaponIcon />
            </div>
            <h1 className="sectionTitle">Choose Weapon</h1>
          </div>
          <hr className="line" style={{ margin: "25px" }} />
          <div className="weapons">
            {/* for validBuilds array, loop through using .map and label current item element for reference*/}

            {validBuilds?.map((element) => {
              return (
                <a href="#finalBuild" className="buttonMargins clickable">
                  {/* upon choosing weapon, set selected build to that and get armour, talismans and physick for them */}
                  {/* use their respective useStates to set arrays for armourArray, talismanArray, and physickArray */}
                  <div
                    className="weaponElement clickable"
                    onClick={() => {
                      setSelectedBuild(element);
                      setArmourArray(getArmour(element.armour));
                      setTalismanArray([
                        getTalisman(element.talisman1),
                        getTalisman(element.talisman2),
                        getTalisman(element.talisman3),
                        getTalisman(element.talisman4),
                      ]);
                      setPhysickArray([
                        getPhysick(element.physick1),
                        getPhysick(element.physick2),
                      ]);
                    }}
                  >
                    <p id="weaponName">{element?.weapon}</p>
                    <button className="weaponButton">
                      <img
                        src={element.weaponImg}
                        alt="weapon"
                        className="clickable"
                      />
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <br />
      <br />
      <br />

      {/* display the final build for user */}

      {selectedBuild && (
        <>
          <div id="finalBuild" className="section">
            <div style={{ display: "flex" }}>
              <div className="sectionIcon">
                <Icons.ShieldIcon />
              </div>
              <h1 className="sectionTitle">Your Build</h1>
            </div>
            <hr className="line" style={{ margin: "25px" }} />

            {/* Display final chosen sword and armour in top row */}
            <div id="finalSwordAndArmourGroup">
              <div
                className="equipmentBox equipmentSeparator"
                id="finalWeaponBox"
              >
                {selectedBuild.weapon}
                <img
                  src={selectedBuild.weaponImg}
                  alt="Weapon of Chosen Class"
                  className="equipmentImage"
                />
              </div>
              <div
                className="equipmentBox equipmentSeparator"
                id="finalArmourBox"
              >
                {selectedBuild.armour}
                <div>
                  <img
                    src={armourArray[0]}
                    alt="Armour Headgear"
                    className="equipmentImage"
                  />
                  <img
                    src={armourArray[1]}
                    alt="Armour Chest"
                    className="equipmentImage"
                  />
                  <img
                    src={armourArray[2]}
                    alt="Armour Legs"
                    className="equipmentImage"
                  />
                </div>
              </div>
            </div>

            <br />

            {/* Display final talismans for build in second row */}

            <div id="finalTalismanGroup" className="equipmentBox">
              <div className="equipmentSeparator">
                {selectedBuild.talisman1}
                <img
                  src={talismanArray[0]}
                  alt="Talisman 1"
                  className="equipmentImage"
                />
              </div>
              <div className="equipmentSeparator">
                {selectedBuild.talisman2}
                <img
                  src={talismanArray[1]}
                  alt="Talisman 1"
                  className="equipmentImage"
                />
              </div>
              <div className="equipmentSeparator">
                {selectedBuild.talisman3}
                <img
                  src={talismanArray[2]}
                  alt="Talisman 1"
                  className="equipmentImage"
                />
              </div>
              <div className="equipmentSeparator">
                {selectedBuild.talisman4}
                <img
                  src={talismanArray[3]}
                  alt="Talisman 1"
                  className="equipmentImage"
                />
              </div>
            </div>

            <br />

            {/* Display final crystal tears and stats for build in third row */}

            <div id="finalPhysickAndStatsGroup">
              <div id="finalPhysickGroup" className="equipmentBox">
                <div className="equipmentSeparator" id="finalPhysickBox">
                  {selectedBuild.physick1}
                  <img
                    src={physickArray[0]}
                    alt="crystal tear 1"
                    className="equipmentImage"
                  />
                </div>
                <div className="equipmentSeparator" id="finalPhysickBox">
                  {selectedBuild.physick2}
                  <img
                    src={physickArray[1]}
                    alt="crystal tear 2"
                    className="equipmentImage"
                  />
                </div>
              </div>

              <div
                id="finalStatsGroup"
                className="equipmentBox"
                style={{ flexDirection: "column" }}
              >
                <h2>Stats</h2>
                <div id="finalBuildStats" style={{ display: "flex" }}>
                  <div>
                    <p>vigor: </p>
                    {selectedBuild.vigor}
                    <p>mind: </p>
                    {selectedBuild.mind}
                    <p>endurance: </p>
                    {selectedBuild.endurance}
                    <p>strength: </p>
                    {selectedBuild.strength}
                  </div>
                  <div>
                    <p>dexterity: </p>
                    {selectedBuild.dexterity}
                    <p>intelligence: </p>
                    {selectedBuild.intelligence}
                    <p>faith: </p>
                    {selectedBuild.faith}
                    <p>arcane: </p>
                    {selectedBuild.arcane}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </body>
  );
}

export default App;
