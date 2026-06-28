import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [fighter, setFighter] = useState("");
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [message, setMessage] = useState("");

  function attack() {
    if (!fighter) {
      setMessage("Choose your fighter first!");
      return;
    }

    const damage = Math.floor(Math.random() * 20) + 5;
    const enemyDamage = Math.floor(Math.random() * 15) + 3;

    const newEnemyHP = Math.max(enemyHP - damage, 0);
    const newPlayerHP = Math.max(playerHP - enemyDamage, 0);

    setEnemyHP(newEnemyHP);
    setPlayerHP(newPlayerHP);

    if (newEnemyHP === 0) {
      setMessage("🏆 You Win!");
    } else if (newPlayerHP === 0) {
      setMessage("💀 You Lose!");
    } else {
      setMessage(
        `${fighter} attacked for ${damage} damage! Enemy hit you for ${enemyDamage}!`
      );
    }
  }

  return (
    <div>
      <h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>

      <h2>Choose your fighter</h2>

      <button onClick={() => setFighter("Naruto 🔥")}>
        Naruto
      </button>

      <button onClick={() => setFighter("Goku ⚡")}>
        Goku
      </button>

      <button onClick={() => setFighter("Ichigo 🗡️")}>
        Ichigo
      </button>

      <h2>Battle Arena</h2>

      <h3>Your Fighter: {fighter}</h3>

      <p>❤️ Player HP: {playerHP}</p>
      <p>👹 Enemy HP: {enemyHP}</p>

      <button onClick={attack}>
        Attack ⚔️
      </button>

      <h3>{message}</h3>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
