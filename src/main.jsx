import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App(){

const [fighter,setFighter] = useState("");
const [playerHP,setPlayerHP] = useState(100);
const [enemyHP,setEnemyHP] = useState(100);
const [message,setMessage] = useState("");

function attack(){

let damage = Math.floor(Math.random()*20)+5;

setEnemyHP(enemyHP-damage);

setMessage(
fighter + " attacked enemy for " + damage + " damage ⚔️"
);

}

return(
<div>

<h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>

<h2>Choose your fighter</h2>

<button onClick={()=>setFighter("Naruto 🔥")}>
Naruto
</button>

<button onClick={()=>setFighter("Goku ⚡")}>
Goku
</button>

<button onClick={()=>setFighter("Ichigo 🗡️")}>
Ichigo
</button>


<h2>Battle Arena</h2>

<h3>{fighter}</h3>

<p>Your HP: {playerHP}</p>

<p>Enemy HP: {enemyHP}</p>

<button onClick={attack}>
Attack ⚔️
</button>

<p>{message}</p>


</div>
)

}

createRoot(document.getElementById("root")).render(<App />);
