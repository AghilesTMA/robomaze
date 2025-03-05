import { useState } from "react";
import { generateMaze } from "../utils/generateMaze";

const useMaze = (mazeSize: number) => {
  const [maze, setMaze] = useState<string[][]>(generateMaze(mazeSize));
  const [currentCell, setCurrentCell] = useState<{ X: number; Y: number }>({
    X: 1,
    Y: 1,
  });
  
  
  return { maze, setMaze, currentCell,setCurrentCell };
};

export default useMaze;
