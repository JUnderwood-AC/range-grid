import { useContext } from "react";
import { GridContext } from "@/context/GridContext";

interface PositionButtonProps {
  position: string;
}

const PositionButton = ({ position }: PositionButtonProps) => {
  const { setSelectedPosition } = useContext(GridContext);

  return <span onClick={() => setSelectedPosition(position)}>{position}</span>;
};

export default PositionButton;
