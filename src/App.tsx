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
  const [stat, setStat] = useState<undefined | string>(undefined);

  const [selectedBuild, setSelectedBuild] = useState<undefined | any>(
    undefined
  );

  const [validBuilds, setValidBuilds] = useState<undefined | any[]>(undefined);

  const [armourArray, setArmourArray] = useState<any[]>([]);

  const [talismanArray, setTalismanArray] = useState<any[]>([]);

  const [tearArray, setTearArray] = useState<any[]>([]);

  return (
    <body>
      {/* Navigation bar at the top of the website */}
      <div className="navBar">
        <div style={{ width: "75%" }}>
          <img
            className="logo"
            src={require("./assets/elden-logo.png")}
            alt="elden logo"
          />
        </div>

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
        <div style={{display: 'flex'}}>
          <div className="sectionIcon">
            <Icons.CompassIcon />
          </div>
          
          <h1 className="sectionTitle">Choose Build</h1>
        </div>

        <hr className="line" style={{margin: '25px'}} />

        <div className="centredBuildButtons">
          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildButton"
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
              className="buildButton"
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
              className="buildButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("int");
                setValidBuilds(buildStructs("int"));
              }}
            >
              Intelligence
            </button>
          </a>

          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildButton"
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
              className="buildButton"
              onClick={() => {
                setSelectedBuild(undefined);
                setStat("arc");
                setValidBuilds(buildStructs("arc"));
              }}
            >
              Arcane
            </button>
          </a>

          <a href="#weaponSelect" className="buttonMargins">
            <button
              className="buildButton"
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
          <div style={{display: 'flex'}}>
            <div className="sectionIcon">
              <Icons.CompassIcon />
            </div>
            <h1 className="sectionTitle">Choose Weapon</h1>
          </div>
          <hr className="line" style={{margin: '25px'}} />
          <div className="weapons">
            {validBuilds?.map((element) => {
              return (
                <a href="#finalBuild" className="buttonMargins clickable">
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
                      setTearArray([
                        getPhysick(element.physick1),
                        getPhysick(element.physick2),
                      ]);
                    }}
                  >
                    <p id="weaponName">{element?.weapon}</p>
                    <button className="weaponButton">
                      <img src={element.weaponImg} alt="weapon" className="clickable"/>
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
            <div style={{display: 'flex'}}>
              <div className="sectionIcon">
                <Icons.CompassIcon />
              </div>
              <h1 className="sectionTitle">Your Build</h1>
            </div>
            <hr className="line" style={{margin: '25px'}} />
            <div id="finalSwordAndArmourGroup">
              <div className="equipmentBox" id="finalWeaponBox">
                {selectedBuild.weapon}
                <img
                  src={selectedBuild.weaponImg}
                  alt="Weapon of Chosen Class"
                  id="finalWeaponImage"
                />
              </div>
              <div className="equipmentBox" id="finalArmourBox">
                {selectedBuild.armour}
                <div>
                  <img
                    src={armourArray[0]}
                    alt="Armour Headgear"
                    className="finalArmourImage"
                  />
                  <img
                    src={armourArray[1]}
                    alt="Armour Chest"
                    className="finalArmourImage"
                  />
                  <img
                    src={armourArray[2]}
                    alt="Armour Legs"
                    className="finalArmourImage"
                  />
                </div>
              </div>
            </div>

            <br />

            <div id="finalTalismanGroup">
              <div className="equipmentBox finalTalismanBox">
                {selectedBuild.talisman1}
                <img
                  src={talismanArray[0]}
                  alt="Talisman 1"
                  className="finalTalismanImage"
                />
              </div>
              <div className="equipmentBox finalTalismanBox">
                {selectedBuild.talisman2}
                <img
                  src={talismanArray[1]}
                  alt="Talisman 1"
                  className="finalTalismanImage"
                />
              </div>
              <div className="equipmentBox finalTalismanBox">
                {selectedBuild.talisman3}
                <img
                  src={talismanArray[2]}
                  alt="Talisman 1"
                  className="finalTalismanImage"
                />
              </div>
              <div className="equipmentBox finalTalismanBox">
                {selectedBuild.talisman4}
                <img
                  src={talismanArray[3]}
                  alt="Talisman 1"
                  className="finalTalismanImage"
                />
              </div>
            </div>

            <br />

            <div id="finalPhysickAndStatsGroup">
              <div id="finalPhysickGroup">
                <div className="equipmentBox" id="finalPhysickBox">
                  {selectedBuild.physick1}
                  <img
                    src={tearArray[0]}
                    alt="crystal tear 1"
                    className="finalPhysickImage"
                  />
                </div>
                <div className="equipmentBox" id="finalPhysickBox">
                  {selectedBuild.physick2}
                  <img
                    src={tearArray[1]}
                    alt="crystal tear 2"
                    className="finalPhysickImage"
                  />
                </div>
              </div>
              <div id="finalStatsGroup">
                <h2>Stats</h2>

              </div>
            </div>
          </div>
        </>
      )}
    </body>
  );
}

export default App;
