import React from "react";

const Homepage = ({ toggle }) => {
  return (
    <div
      className="flex items-center justify-center w-[1100px] mx-auto py-20"
      style={{ height: "calc(100vh - 5rem)" }}
    >
      <div>
        <img className="w-96%" src="./src/assets/images/dices.png" alt="" />
      </div>

      <div>
        <h1 className="w-[528px] top-[180px] left-[129px] gap-1 text-8xl font-bold">
          DICE GAME
        </h1>
        <button
          className="min-w-56 bg-black text-white mt-3 px-5 py-2.5 rounded-md cursor-pointer"
          onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Homepage;
