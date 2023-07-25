"use client";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { GridContext } from "@/context/GridContext";
import grid from "@/components/Grid";
import { set } from "zod";

interface CellProps {
  name: string;
}

const Cell = ({ name }: CellProps) => {
  const { gridColours, setSelectedHand, selectedPosition } =
    useContext(GridContext);
  const colour = gridColours[name][selectedPosition.toLowerCase()]?.colour;

  const attemptRerender = () => {
    setSelectedHand(name);
  };

  return (
    <th
      className={`rounded-lg border border-slate-200 hover:bg-slate-200 p-2`}
      style={{ backgroundColor: colour }}
      onClick={() => attemptRerender()}
    >
      <p className="font-bold text-lg">{name}</p>
    </th>
  );
};

export default Cell;