"use client";

import {
  ReactNode,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { DEFAULT_VALUES, SIX_HAND_POSITIONS } from "@/constants";

interface Tester {
  [index: string]: { colour: string };
}

type GridColours = {
  [index: string]: Tester;
};

type GridContext = {
  gridColours: GridColours;
  updateGridColours: (targetColour: string) => void;
  selectedHand: string;
  setSelectedHand: Dispatch<SetStateAction<string>>;
  selectedPosition: string;
  setSelectedPosition: Dispatch<SetStateAction<string>>;
};

export const GridContext = createContext<GridContext>({
  gridColours: DEFAULT_VALUES,
  updateGridColours: () => false,
  selectedHand: SIX_HAND_POSITIONS[0],
  setSelectedHand: () => false,
  selectedPosition: "",
  setSelectedPosition: () => false,
});

export const GridContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedHand, setSelectedHand] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("utg");
  const [gridColours, setGridColours] = useState<GridColours>(DEFAULT_VALUES);

  const updateGridColours = (targetColour: string) => {
    let grid = gridColours;
    grid[selectedHand][selectedPosition.toLowerCase()].colour = `${targetColour}`;
    setGridColours({ ...grid });
  };

  return (
    <GridContext.Provider
      value={{
        gridColours,
        updateGridColours,
        selectedHand,
        setSelectedHand,
        selectedPosition,
        setSelectedPosition,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
