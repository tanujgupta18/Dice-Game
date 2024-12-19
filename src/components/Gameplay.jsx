import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { useState } from "react";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) * min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <main className="py-8">
      <div className="flex justify-around items-end">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="flex flex-col w-52 mx-auto">
        <button className="min-w-56 font-semibold mx-auto mt-3 px-4 py-2.5 rounded-md cursor-pointer border border-black" onClick={resetScore}>
          Reset Score
        </button>
        <button className="min-w-56 font-semibold bg-black text-white mt-3 px-5 py-2.5 rounded-md cursor-pointer" onClick={() => setShowRules(prev => !prev)}>{
          showRules ? "Hide" : "Show"} Rules</button>
      </div>

      {showRules && <Rules />}
    </main>
  );
};

export default Gameplay;
