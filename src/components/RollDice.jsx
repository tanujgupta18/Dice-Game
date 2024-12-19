import React from "react";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";

const RollDice = ({ rollDice, currentDice }) => {
  // Map the dice images
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <div className="flex flex-col justify-center pt-6">
      <div className="flex justify-center cursor-pointer" onClick={rollDice}>
        <img src={diceImages[currentDice - 1]} alt={`Dice ${currentDice}`} />
      </div>
      <p className="flex justify-center text-xl">Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;
