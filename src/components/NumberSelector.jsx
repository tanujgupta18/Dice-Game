import React, { useState } from "react";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }
  return (
    <div className="flex flex-col items-end">
      <p className="text-red-500 text-xl mb-1">{error}</p>
      <div className="flex gap-6">
        {arrNumber.map((value, i) => (
          <div
            className={`grid place-content-center w-[60px] h-[60px] text-xl font-bold border border-black cursor-pointer ${value === selectedNumber ? "bg-black text-white" : "bg-white text-black"
              }`}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-xl font-bold pt-3">Select Number</p>
    </div>
  );
};

export default NumberSelector;
