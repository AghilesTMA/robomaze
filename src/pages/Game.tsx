import { useState } from "react";
import Button from "../components/Button";
import Maze from "../components/Maze";
import useMaze from "../hooks/useMaze";
import { Link } from "react-router";
import { generateMaze } from "../utils/generateMaze";

const Game = () => {
  const { maze, setMaze, currentCell } = useMaze(19);
  const algorithms = ["DFS", "BFS", "A*"];
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("DFS");
  const actions = ["Run", "Next step", "Reset"];

  return (
    <div className=" flex  justify-between px-8 py-4">
      <div className=" flex flex-col gap-2 w-full">
        {/* Algorithms section  */}
        <div className=" flex gap-2 flex-col">
          <h2 className=" font-semibold text-2xl">Algorithm</h2>
          <ul className=" flex gap-2 ">
            {algorithms.map((algorithm) => (
              <li key={algorithm}>
                <Button
                  text={algorithm}
                  className={`hover:bg-white ${
                    selectedAlgorithm === algorithm && "bg-white"
                  }`}
                  action={() => setSelectedAlgorithm(algorithm)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Actions section  */}
        <div className=" flex gap-2 flex-col">
          <h2 className=" font-semibold text-2xl">Actions</h2>
          <ul className=" flex gap-2 ">
            {actions.map((action) => (
              <li key={action}>
                <Button
                  text={action}
                  className=" hover:bg-white"
                  action={() => {
                    if (action === "Reset") {
                      setMaze(generateMaze(19));
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <h2 className=" font-semibold text-blue-700 underline">
          <Link to="/">Go Home</Link>
        </h2>
      </div>

      <div>
        <Maze maze={maze} setMaze={setMaze} currentCell={currentCell} />
      </div>
    </div>
  );
};

export default Game;
