import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const fighters = [
    { name: "Naruto 🔥", power: "Rasengan" },
    { name: "Goku ⚡", power: "Kamehameha" },
    { name: "Ichigo 🗡️", power: "Getsuga Tensho" }
  ];

  const [fighter, setFighter] = useState(null);
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [message, setMessage] = useState("");

  function attack() {
    if (!fighter) {
      setMessage("Pick a fighter first!");
      return;
    }

    let damage = Math.floor(Math.random() * 25) + 10;
    let enemyAttack = Math.floor(Math.random() * 15) + 5;

    setEnemyHP(Math.max(enemyHP - damage, 0));
    setPlayerHP(Math.max(playerHP - enemyAttack, 0));

    setMessage(
      `${fighter.name} used ${fighter.power}! ⚔️ Damage: ${damage}`
    );
  }

  return (
    <div style={{
      padding:"30px",
      fontFamily:"Arial",
      textAlign:"center"
    }}>

      <h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>

      <h2>Select Fighter</h2>

      {fighters.map((f)=>(
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
      ))}


      <h2>🔥 VS BATTLE 🔥</h2>

      <h2>
        {fighter ? fighter.name : "???"} 
        {" VS "}
        👹 Enemy
      </h2>


      <h3>❤️ Player HP: {playerHP}</h3>

      <div style={{
        width:"300px",
        margin:"auto",
        border:"2px solid black"
      }}>
        <div style={{
          width:`${playerHP}%`,
          height:"25px",
          background:"lime"
        }} />
      </div>


      <br/>


      <h3>👹 Enemy HP: {enemyHP}</h3>

      <div style={{
        width:"300px",
        margin:"auto",
        border:"2px solid black"
      }}>
        <div style={{
          width:`${enemyHP}%`,
          height:"25px",
          background:"red"
        }} />
      </div>


      <br/>

      <button
        onClick={attack}
        style={{
          padding:"15px",
          fontSize:"18px"
        }}
      >
        ⚔️ ATTACK
      </button>


      <h3>{message}</h3>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
