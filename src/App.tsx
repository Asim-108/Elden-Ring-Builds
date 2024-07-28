import './App.css';

function App() {
  return (
 
<body>
    <div className="navBar">
        <img src="./assets/elden logo.png" alt="elden logo" />
        <button className="navButton">
            <img src=".\assets\elden logo.png" alt="nav compass" />
        </button>
        <button className="navButton">Weapon</button>
        <button className="navButton">Equipment</button>
    </div>
    
    <div>
        <h2 className="quickBuilds">Quick Builds</h2>
        <h1 className="EldenRing">ELDEN RING</h1>
        <img src="https://i.redd.it/3e2afpjsi4f61.png" alt="Elden Ring Logo" height="250"/>
        <p>By: Asim</p>
    </div>

    <div>
        <h1>Choose Build</h1>
        <button className="buildButton">Strength</button>
        <button className="buildButton">Dexterity</button>
        <button className="buildButton">Intelligence</button>
        <button className="buildButton">Faith</button>
        <button className="buildButton">Arcane</button>
        <button className="buildButton">Surprise Me!</button>
    </div>
    
</body>
  );
}

export default App;
