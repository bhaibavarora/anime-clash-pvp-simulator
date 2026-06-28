import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {

  const fighters = [
    {
      name:"Naruto 🔥",
      power:"Rasengan",
      image:"https://i.imgur.com/6X4R3Qf.png"
    },
    {
      name:"Goku ⚡",
      power:"Kamehameha",
      image:"https://i.imgur.com/8Km9tLL.png"
    },
    {
      name:"Ichigo 🗡️",
      power:"Getsuga",
      image:"https://i.imgur.com/3ZQ3Z8s.png"
    }
  ];


  const [fighter,setFighter] = useState(null);
  const [playerHP,setPlayerHP] = useState(100);
  const [enemyHP,setEnemyHP] = useState(100);
  const [message,setMessage] = useState("");


  function attack(){

    if(!fighter){
      setMessage("Choose a fighter!");
      return;
    }

    let damage = Math.floor(Math.random()*25)+10;
    let hit = Math.floor(Math.random()*15)+5;


    setEnemyHP(Math.max(enemyHP-damage,0));
    setPlayerHP(Math.max(playerHP-hit,0));


    setMessage(
      `${fighter.name} used ${fighter.power}! ⚔️`
    );

  }


return (

<div style={{
textAlign:"center",
fontFamily:"Arial",
padding:"30px"
}}>


<h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>


<h2>Choose Fighter</h2>


{
fighters.map((f)=>(

<button
key={f.name}
onClick={()=>setFighter(f)}
style={{
margin:"10px",
padding:"12px"
}}
>

{f.name}

</button>

))
}



<h2>🔥 VS BATTLE 🔥</h2>


<div style={{
display:"flex",
justifyContent:"center",
gap:"50px"
}}>


<div>

<h3>
{fighter ? fighter.name : "You"}
</h3>

{
fighter &&
<img
src={fighter.image}
width="150"
/>
}

<p>❤️ HP {playerHP}</p>

</div>


<h1>VS</h1>


<div>

<h3>Enemy 👹</h3>

<img
src="https://i.imgur.com/5NZ6e9p.png"
width="150"
/>

<p>❤️ HP {enemyHP}</p>

</div>


</div>



<button
onClick={attack}
style={{
fontSize:"20px",
padding:"15px",
margin:"20px"
}}
>

⚔️ ATTACK

</button>


<h2>{message}</h2>


</div>

);

}


createRoot(document.getElementById("root")).render(<App />);
