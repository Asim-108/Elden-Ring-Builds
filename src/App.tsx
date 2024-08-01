import { useState } from "react";
import "./App.css";
import "./buildStructs";
import buildStructs from "./buildStructs";
import * as Icons from "./assets/index";

function App() {
  const [stat, setStat] = useState<undefined | string>(undefined);

  const [selectedBuild, setSelectedBuild] = useState<undefined | any>(
    undefined
  );

  const [validBuilds, setValidBuilds] = useState<undefined | any[]>(undefined);

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

        <a href="#buildSelect">
          <button className="navButton">
            <Icons.CompassIcon />
          </button>
        </a>

        <a href="#weaponSelect">
          <button className="navButton">
            <Icons.WeaponIcon />
          </button>
        </a>

        <a href="#finalBuild">
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

      <div id="buildSelect">
        <h1>Choose Build</h1>

        <div className="centredBuildButtons">
          <a href="#weaponSelect">
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

          <a href="#weaponSelect">
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

          <a href="#weaponSelect">
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

          <a href="#weaponSelect">
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

          <a href="#weaponSelect">
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

          <a href="#weaponSelect">
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
        <>
          <h1>Choose Weapon</h1>
          <div id="weaponSelect">
            {validBuilds?.map((element) => {
              return (
                <a href="#finalBuild">
                  <div
                    className="weaponElement"
                    onClick={() => setSelectedBuild(element)}
                  >
                    {element?.weapon}
                    <button className="weaponButton">
                      <img src={element.weaponImg} alt="weapon image" />
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </>
      )}

      <br />
      <br />
      <br />

      {/* display the final build for user */}

      {selectedBuild && (
        <>
          <div id="finalBuild">
            <h1>Your Build</h1>
            <div id="flex">
              <div className="textBox" id="box">
                {selectedBuild.weapon}
              </div>
              <div className="textBox" id="box">
                {selectedBuild.armour}
              </div>
              <div className="textBox" id="box">
                {selectedBuild.talisman1}
              </div>
            </div>
          </div>
        </>
      )}
    </body>
  );
}

export default App;
