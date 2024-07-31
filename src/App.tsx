import { useState } from "react";
import "./App.css";
import "./buildStructs";
import buildStructs from "./buildStructs";

function App() {
  const [stat, setStat] = useState<undefined | string>(undefined);

  let validBuilds = buildStructs(stat);

  const [selectedBuild, setSelectedBuild] = useState<undefined | any>(
    undefined
  );

  return (
    <body>
      <div className="navBar">
        <img
          src={require("./assets/elden logo.png")}
          alt="elden logo"
          style={{ marginLeft: 40, marginRight: 40 }}
        />

        <a href="#buildSelect">
          <button className="navButton">
            <img src={require("./assets/nav logo.png")} alt="nav compass" />
          </button>
        </a>

        <a href="#weaponSelect">
          <button className="navButton">
            <img src={require("./assets/weapon logo.png")} alt="weapon logo" />
          </button>
        </a>

        <a href="#finalBuild">
          <button className="navButton">
            <img src={require("./assets/shield logo.png")} alt="shield logo" />
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
        <p>By: Asim</p>
      </div>

      <div id="buildSelect">
        <h1>Choose Build</h1>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("str");
            setSelectedBuild(undefined);
          }}
        >
          Strength
        </button>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("dex");
            setSelectedBuild(undefined);
          }}
        >
          Dexterity
        </button>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("int");
            setSelectedBuild(undefined);
          }}
        >
          Intelligence
        </button>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("fai");
            setSelectedBuild(undefined);
          }}
        >
          Faith
        </button>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("arc");
            setSelectedBuild(undefined);
          }}
        >
          Arcane
        </button>
        <button
          className="buildButton"
          onClick={function (event) {
            setStat("rand");
            setSelectedBuild(undefined);
          }}
        >
          Surprise Me!
        </button>
      </div>
      <br />
      <br />
      <br />

      {stat && (
        <>
          <div id="weaponSelect">
            <h1>Choose Weapon</h1>
            {validBuilds?.map((element) => {
              return (
                <button onClick={() => setSelectedBuild(element)}>
                  {element?.weapon}
                </button>
              );
            })}
          </div>
        </>
      )}

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
