"use client";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  {
    option: "Caneta",
    style: { backgroundColor: "#0F2E46", textColor: "#6CB8DA " },
  },
  {
    option: "Bloco de Notas",
    style: { backgroundColor: "#6CB8DA ", textColor: "#0F2E46" },
  },
  {
    option: "T-Shirt",
    style: { backgroundColor: "#F1803D ", textColor: "#0F2E46" },
  },
  {
    option: "Cantil",
    style: { backgroundColor: "#F3E04E  ", textColor: "#0F2E46" },
  },
  {
    option: "Caneta",
    style: { backgroundColor: "#0F2E46", textColor: "#6CB8DA " },
  },
  {
    option: "Bloco de Notas",
    style: { backgroundColor: "#6CB8DA ", textColor: "#0F2E46" },
  },
  {
    option: "T-Shirt",
    style: { backgroundColor: "#F1803D ", textColor: "#0F2E46" },
  },
  {
    option: "Cantil",
    style: { backgroundColor: "#F3E04E  ", textColor: "#0F2E46" },
  },
];

export default function WheelOfPrize({ onPrizeSelect }: any) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setMustSpin(true);
      setPrizeNumber(newPrizeNumber);
    }
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        outerBorderColor={"#f2f2f2"}
        radiusLineColor={"#f2f2f2"}
        onStopSpinning={() => {
          console.log("Premio:" + prizeNumber);
          onPrizeSelect(prizeNumber);
          setMustSpin(false);
        }}
      />

      {!mustSpin ? (
        <button
          onClick={handleSpinClick}
          className="bg-secondary p-3 font-bold rounded text-white mt-5"
        >
          GIRAR RODA DOS PRÉMIOS
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
