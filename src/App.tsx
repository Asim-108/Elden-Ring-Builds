import { useState } from 'react';
import './App.css';


function App() {
    const[stat, setStat] = useState<undefined | string>(undefined);
    console.log(stat);

  return (
 
<body>
    <div className="navBar">
        <img src={require("./assets/elden logo.png")} alt="elden logo" />
        <a href="#buildSelect">
            <button className="navButton">
                    <img src={require("./assets/nav logo.png")} alt="nav compass" />
            </button>
        </a>
        <button className="navButton">Weapon</button>
        <button className="navButton">Equipment</button>
    </div>
    
    <div>
        <h2 className="quickBuilds">Quick Builds</h2>
        <h1 className="EldenRing">ELDEN RING</h1>
        <img src="https://i.redd.it/3e2afpjsi4f61.png" alt="Elden Ring Logo" height="250"/>
        <p>By: Asim</p>
    </div>

    <div id='buildSelect'>
        <h1>Choose Build</h1>
        <button className="buildButton" onClick={()=>setStat('str')}>Strength</button>
        <button className="buildButton" onClick={()=>setStat('dex')}>Dexterity</button>
        <button className="buildButton" onClick={()=>setStat('int')}>Intelligence</button>
        <button className="buildButton" onClick={()=>setStat('fai')}>Faith</button>
        <button className="buildButton" onClick={()=>setStat('arc')}>Arcane</button>
        <button className="buildButton" onClick={()=>setStat('rand')}>Surprise Me!</button>
    </div>
    <br />
    <br />
    <br />

    {
        stat && (
                <>   
                    <div>
                        <h1>Choose Weapon</h1>
                        <button>TEST1</button>
                        <button>TEST2</button>
                        <button>TEST3</button>
                    </div>
                
                    <div>
                        <h1>Your Build</h1>
                        <div id='flex'>
                            <div className='textBox' id='box'>
                            </div>
                            <div className='textBox' id='box'>
                            </div>
                            <div className='textBox' id='box'>
                            </div>     
                        </div>
                        
                    </div>
            </>
        )
        
    }

</body>
  );
}

export default App;
