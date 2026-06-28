import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [fighter, setFighter] = useState("");
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [message, setMessage] = useState("");

  function attack() {
    if (!fighter) {
      setMessage("Choose your fighter!");
      return;
    }

    const damage = Math.floor(Math.random() * 20) + 5;
    const enemyHit = Math.floor(Math.random() * 15) + 3;

    const newEnemy = Math.max(enemyHP - damage, 0);
    const newPlayer = Math.max(playerHP - enemyHit, 0);

    setEnemyHP(newEnemy);
    setPlayerHP(newPlayer);

    if (newEnemy === 0) {
      setMessage("🏆 Victory! Enemy defeated!");
    } else if (newPlayer === 0) {
      setMessage("💀 Defeat! Try again!");
    } else {
      setMessage(
        `${fighter} dealt ${damage} damage ⚔️ Enemy hit you for ${enemyHit}`
      );
    }
  }

  return (
    <div style={{fontFamily:"Arial", padding:"20px"}}>
      <h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>

      <h2>Choose your fighter</h2>

      <button onClick={()=>setFighter("Naruto 🔥")}>Naruto</button>
      <button onClick={()=>setFighter("Goku ⚡")}>Goku</button>
      <button onClick={()=>setFighter("Ichigo 🗡️")}>Ichigo</button>

      <h2>🔥 Battle Arena 🔥</h2>

      <h3>Your Fighter: {fighter}</h3>

      <div>
        ❤️ Player HP
        <div style={{
          width:"300px",
          height:"25px",
          border:"2px solid black"
        }}>
          <div style={{
            width:`${playerHP}%`,
            height:"100%",
            background:"green"
          }}></div>
        </div>
      </div>

      <br/>

      <div>
        👹 Enemy HP
        <div style={{
          width:"300px",
          height:"25px",
          border:"2px solid black"
        }}>
          <div style={{
            width:`${enemyHP}%`,
            height:"100%",
            background:"red"
          }}></div>
        </div>
      </div>

      <br/>

      <button onClick={attack}>
        ⚔️ Attack
      </button>

      <h3>{message}</h3>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
