"use client";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { HexColorPicker } from "react-colorful";
import { GridContext } from "@/context/GridContext";

const ColourPanel = () => {
  const [color, setColor] = useState("#f1f5f9");
  const { updateGridColours } = useContext(GridContext);

  return (
    <div className="float-right">
      <h3> Colour Panel </h3>
      <HexColorPicker color={color} onChange={setColor} />
      <button onClick={() => updateGridColours(color)}>Apply</button>
    </div>
  );
};

export default ColourPanel;
