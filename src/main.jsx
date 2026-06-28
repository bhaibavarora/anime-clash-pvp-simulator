import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>⚔️ Anime Clash PvP Simulator ⚔️</h1>

      <h2>Choose your fighter</h2>

      <button>🔥 Naruto</button>
      <button>⚡ Goku</button>
      <button>🌑 Ichigo</button>

      <h2>Battle Arena</h2>

      <p>Your fighter attacks the enemy!</p>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
