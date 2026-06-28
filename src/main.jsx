import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App(){

const [fighter,setFighter]=useState("");
const [enemy,setEnemy]=useState("Enemy");
const [message,setMessage]=useState("");
const [hp,setHp]=useState(100);

function attack(){
 let damage=Math.floor(Math.random()*20)+1;
 setHp(hp-damage);
 setMessage(fighter+" attacks "+enemy+" ⚔️ Damage: "+damage);
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

<button onClick={()=>setFighter("Ichigo ⚔️")}>
Ichigo
</button>

<h2>Battle Arena</h2>

<h3>{fighter} VS {enemy}</h3>

<h3>Enemy HP: {hp}</h3>

<button onClick={attack}>
Attack ⚔️
</button>

<p>{message}</p>

</div>
)

}

createRoot(document.getElementById("root")).render(<App/>);
