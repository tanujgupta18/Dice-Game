# Dice Game

A simple dice game built with React where you select a number and roll a dice. If your selected number matches the dice roll, you earn points, otherwise, you lose points.

## Features

- Select a number between 1 and 6.
- Roll a virtual dice by clicking the dice image.
- Earn points if the number you selected matches the dice roll.
- Lose 2 points if your guess is incorrect.
- View the total score and reset it.

## Technologies Used

- React
- Tailwind CSS (for styling)

## Installation

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Git](https://git-scm.com/)

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/tanujgupta18/dice-game.git
   cd dice-game
   ```

````

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the project locally:

   ```bash
   npm run dev
   ```

   This will start the development server and open the app in your default web browser at `http://localhost:5173`.

## Game Rules

1. **Select a Number:** Click on one of the number tiles (1-6) to select your number.
2. **Roll the Dice:** Click on the dice image to roll the dice.
3. **Match:** If the rolled dice number matches the number you selected, you earn points equal to the dice number.
4. **Incorrect Guess:** If your guess doesn't match the rolled number, 2 points are deducted from your total score.
5. **Reset Score:** You can reset the score at any time by clicking the "Reset Score" button.
````
