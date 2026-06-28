import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App(){

const [fighter,setFighter] = useState("");
const [message,setMessage] = useState("");

function attack(){
 setMessage(fighter + " attacks the enemy! ⚔️");
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

<button onClick={attack}>
Attack 💥
</button>

<p>{message}</p>

</div>
)  

}

createRoot(document.getElementById("root")).render(<App/>);
