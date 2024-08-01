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

  let validBuilds = buildStructs(stat);

  return (
    <body>
      {/* Navigation bar at the top of the website */}

      <div className="navBar">
        <div style={{width: "75%"}}>
          <img
            className="logo"
            src={require("./assets/elden logo.png")}
            alt="elden logo"
            style={{ }}
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

      <div>
        <h2 className="quickBuilds">Quick Builds</h2>
        <h1 className="EldenRing">ELDEN RING</h1>
        <img
          src="https://i.redd.it/3e2afpjsi4f61.png"
          alt="Elden Ring Logo"
          height="250"
        />
        <p style={{ color: "white" }}>By: Asim</p>
      </div>

      <br />
      <br />
      <br />

      {/* Choosing build Stat */}

      <div id="buildSelect">
        <h1>Choose Build</h1>
        <a href="#weaponSelect">
          <button
            className="buildButton"
            onClick={() => {
              setStat("str");
              setSelectedBuild(undefined);
            }}
          >
            Strength
          </button>
        </a>

        <a href="#weaponSelect">
          <button
            className="buildButton"
            onClick={() => {
              setStat("dex");
              setSelectedBuild(undefined);
            }}
          >
            Dexterity
          </button>
        </a>

        <a href="#weaponSelect">
          <button
            className="buildButton"
            onClick={() => {
              setStat("int");
              setSelectedBuild(undefined);
            }}
          >
            Intelligence
          </button>
        </a>

        <a href="#weaponSelect">
          <button
            className="buildButton"
            onClick={() => {
              setStat("fai");
              setSelectedBuild(undefined);
            }}
          >
            Faith
          </button>
        </a>

        <a href="#weaponSelect">
          <button
            className="buildButton"
            onClick={() => {
              setStat("arc");
              setSelectedBuild(undefined);
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
              setSelectedBuild(undefined);
            }}
          >
            Surprise Me!
          </button>
        </a>
      </div>

      <br />
      <br />
      <br />

      {/* display the valid builds for the stat chosen */}

      {stat && (
        <>
          <div id="weaponSelect">
            <h1>Choose Weapon</h1>
            {validBuilds?.map((element) => {
              return (
                <a href="#finalBuild">
                  <button onClick={() => setSelectedBuild(element)}>
                    {element?.weapon}
                  </button>
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
