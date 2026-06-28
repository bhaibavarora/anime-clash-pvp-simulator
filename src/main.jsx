import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App(){

const fighters=[
{
name:"Naruto 🔥",
move:"Rasengan"
},
{
name:"Goku ⚡",
move:"Kamehameha"
},
{
name:"Ichigo 🗡️",
move:"Getsuga"
}
];


const [fighter,setFighter]=useState(null);
const [playerHP,setPlayerHP]=useState(100);
const [enemyHP,setEnemyHP]=useState(100);
const [energy,setEnergy]=useState(100);

const [level,setLevel]=useState(1);
const [xp,setXP]=useState(0);
const [coins,setCoins]=useState(0);

const [message,setMessage]=useState("");



function attack(){

if(!fighter){
setMessage("Choose fighter first!");
return;
}


if(energy < 20){
setMessage("⚡ Need more energy!");
return;
}


let damage=Math.floor(Math.random()*30)+10;

let enemyHit=Math.floor(Math.random()*15)+5;


let newEnemy=Math.max(enemyHP-damage,0);

setEnemyHP(newEnemy);

setPlayerHP(Math.max(playerHP-enemyHit,0));

setEnergy(energy-20);


if(newEnemy===0){

setXP(xp+100);
setCoins(coins+50);

if(xp>=100){
setLevel(level+1);
}

setMessage("🏆 Victory! +100 XP +50 Coins");

}

else{

setMessage(
`${fighter.name} used ${fighter.move}! ⚔️ ${damage} damage`
);

}

}



function recharge(){

setEnergy(100);

setMessage("⚡ Energy restored!");

}



return(

<div style={{
textAlign:"center",
fontFamily:"Arial",
padding:"30px"
}}>


<h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>


<h3>
⭐ Level: {level} | XP: {xp} | 🪙 Coins: {coins}
</h3>


<h2>Select Fighter</h2>


{
fighters.map(f=>(

<button
key={f.name}
onClick={()=>setFighter(f)}
style={{
margin:"8px",
padding:"12px"
}}
>

{f.name}

</button>

))

}


<h2>
{fighter ? fighter.name:"???"}
 VS 👹 Enemy
</h2>


<h3>❤️ Player HP: {playerHP}</h3>

<h3>👹 Enemy HP: {enemyHP}</h3>


<h3>⚡ Energy: {energy}</h3>


<button onClick={attack}>
⚔️ Attack
</button>


<button onClick={recharge}>
⚡ Recharge
</button>


<h2>{message}</h2>


</div>

)

}


createRoot(document.getElementById("root")).render(<App/>);




