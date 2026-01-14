// FirstPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/second"); // путь следующей страницы
  };

  return (
    <div className="main">
      <h1>JS Forge</h1>
      <button id="start-button" onClick={handleStart}>Начать</button>
      {/* Остальной твой контент */}

      
    </div>
  );
}

    // SecondPage.jsx


