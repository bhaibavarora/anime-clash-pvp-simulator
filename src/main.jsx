import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App(){

const fighters=[
{
name:"Naruto 🔥",
move:"Rasengan",
emoji:"🌀"
},
{
name:"Goku ⚡",
move:"Kamehameha",
emoji:"💥"
},
{
name:"Ichigo 🗡️",
move:"Getsuga",
emoji:"🌙"
}
];


const [fighter,setFighter]=useState(null);
const [playerHP,setPlayerHP]=useState(100);
const [enemyHP,setEnemyHP]=useState(100);
const [energy,setEnergy]=useState(100);
const [msg,setMsg]=useState("");


function attack(){

if(!fighter){
setMsg("Choose fighter first!");
return;
}

if(energy < 20){
setMsg("Not enough energy ⚡");
return;
}


let damage=Math.floor(Math.random()*30)+15;
let enemyDamage=Math.floor(Math.random()*20)+5;


setEnemyHP(Math.max(enemyHP-damage,0));
setPlayerHP(Math.max(playerHP-enemyDamage,0));
setEnergy(energy-20);


if(enemyHP-damage <=0){

setMsg("🏆 YOU WIN!");

}

else if(playerHP-enemyDamage <=0){

setMsg("💀 YOU LOST!");

}

else{

setMsg(
`${fighter.emoji} ${fighter.name} used ${fighter.move}! Damage ${damage}`
);

}

}



function reset(){

setPlayerHP(100);
setEnemyHP(100);
setEnergy(100);
setMsg("");

}



return(

<div style={{
textAlign:"center",
fontFamily:"Arial",
padding:"30px"
}}>


<h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>


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



<h2>🔥 BATTLE ARENA 🔥</h2>


<h2>
{fighter ? fighter.name:"???"}
 VS 👹 Enemy
</h2>


<h3>❤️ Your HP: {playerHP}</h3>

<div style={{
width:"300px",
height:"25px",
border:"2px solid black",
margin:"auto"
}}>

<div style={{
width:`${playerHP}%`,
height:"100%",
background:"green"
}}/>

</div>



<h3>👹 Enemy HP: {enemyHP}</h3>

<div style={{
width:"300px",
height:"25px",
border:"2px solid black",
margin:"auto"
}}>

<div style={{
width:`${enemyHP}%`,
height:"100%",
background:"red"
}}/>

</div>



<h3>⚡ Energy: {energy}</h3>


<button
onClick={attack}
style={{
padding:"15px",
fontSize:"18px"
}}
>
⚔️ Special Attack
</button>


<br/><br/>


<button onClick={reset}>
🔄 Restart Battle
</button>


<h2>{msg}</h2>


</div>

);

}


createRoot(document.getElementById("root")).render(<App/>);
