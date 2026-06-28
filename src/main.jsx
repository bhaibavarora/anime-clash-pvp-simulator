import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function App(){

const [coins,setCoins]=useState(100);

const [fighters,setFighters]=useState([
{
name:"Naruto 🔥",
move:"Rasengan",
unlocked:true
},
{
name:"Goku ⚡",
move:"Kamehameha",
unlocked:true
},
{
name:"Ichigo 🗡️",
move:"Getsuga",
unlocked:false
}
]);


const [fighter,setFighter]=useState(null);

const [enemyHP,setEnemyHP]=useState(100);

const [message,setMessage]=useState("");



function unlock(index){

if(coins>=50){

let copy=[...fighters];

copy[index].unlocked=true;

setFighters(copy);

setCoins(coins-50);

setMessage("🎉 Fighter unlocked!");

}

else{

setMessage("Need more coins 🪙");

}

}



function attack(){

if(!fighter){

setMessage("Choose fighter!");

return;

}


let damage=Math.floor(Math.random()*30)+10;


setEnemyHP(Math.max(enemyHP-damage,0));


setCoins(coins+10);


setMessage(
`${fighter.name} used ${fighter.move}! Damage ${damage} ⚔️ +10 coins`
);

}



return(

<div style={{
textAlign:"center",
fontFamily:"Arial",
padding:"30px"
}}>


<h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>


<h2>🪙 Coins: {coins}</h2>


<h2>🛒 Fighter Shop</h2>


{

fighters.map((f,index)=>(

<div key={f.name}>

<button

disabled={!f.unlocked}

onClick={()=>setFighter(f)}

>

{f.unlocked ? f.name : "🔒 Locked"}

</button>


{!f.unlocked &&

<button onClick={()=>unlock(index)}>
Unlock 50 🪙
</button>

}

</div>

))

}



<h2>🔥 Battle Arena</h2>


<h3>
You: {fighter ? fighter.name:"None"}
</h3>


<h3>
👹 Enemy HP: {enemyHP}
</h3>


<button onClick={attack}>
⚔️ Attack
</button>


<h3>{message}</h3>


</div>

)

}


createRoot(document.getElementById("root")).render(<App/>);
