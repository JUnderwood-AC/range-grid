"use client";

import Cell from "@/components/Cell";
import { STANDARD_GRID, SIX_HAND_POSITIONS } from "@/constants";
import { useContext, useState } from "react";
import ColourPanel from "@/components/ColourPanel";
import { GridContext } from "@/context/GridContext";
import PositionButton from "@/components/PositionButton";

const Grid = () => {
  const { selectedHand, selectedPosition } = useContext(GridContext);

  return (
    <div className="">
      <table
        className={
          "border border-gray-800 border-separate border-spacing-2 p-4"
        }
      >
        <tbody>
          {STANDARD_GRID.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell) => (
                  <Cell key={cell} name={cell} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row space-x-4">
        {SIX_HAND_POSITIONS.map((position, index) => {
          return <PositionButton position={position} key={index} />;
        })}
      </div>
      <p>SELECTED HAND:&nbsp;{selectedHand}</p>
      <p>SELECTED POSITION:{selectedPosition}</p>
      <ColourPanel />
    </div>
  );
};

export default Grid;
