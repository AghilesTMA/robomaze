import { useEffect, useState } from "react";
import Button from "../components/Button";
import Maze from "../components/Maze";
import useMaze from "../hooks/useMaze";
import { Link } from "react-router";
import { generateMaze } from "../utils/generateMaze";
import { isValidCell } from "../utils/generateMaze";

const Game = () => {
  const { maze, setMaze, currentCell, setCurrentCell } = useMaze(19);
  const [simulationRunning,setSimulationRunning] = useState(false);
  const algorithms = ["BFS", "DFS", "A*"];
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const actions = ["Run Simulation", "Reset"];
  const [solutionPath, setSolutionPath] = useState<{ x: number; y: number }[]>(
    []
  );
  const [visitedCells, setVisitedCells] = useState<{ x: number; y: number }[]>(
    []
  );

  const runSimulationAction = () => {
    if(solutionPath.length > 0) {
      setSimulationRunning(true);
      const interval = setInterval(() => {
        if(solutionPath.length > 0) {
          setCurrentCell({X: solutionPath[0].x, Y: solutionPath[0].y});
          solutionPath.shift();
        } else {
          setSimulationRunning(false);
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const resetAction = () => {
    setSelectedAlgorithm("");
    setCurrentCell({X: 1, Y: 1});
    setSolutionPath([]);
    setVisitedCells([]);
    setMaze(generateMaze(19));
  };

  const BfsAlgorithm = () => {
    //initialize
    const visited: { x: number; y: number }[] = [];
    const queue: { x: number; y: number }[] = [];
    const parents = new Map();
    parents.set("1 1", null);
    queue.push({ x: 1, y: 1 });
    let found = false;

    //iterate
    while (queue.length > 0 && !found) {
      const curr = queue.shift()!;
      visited.push(curr);
      if (maze[curr.x][curr.y] === "E") {
        found = true;
        break;
      }
      const neighbors = [
        { x: curr.x + 1, y: curr.y },
        { x: curr.x, y: curr.y + 1 },
        { x: curr.x, y: curr.y - 1 },
        { x: curr.x - 1, y: curr.y },
      ];
      for (const neighbor of neighbors) {
        if (
          isValidCell(neighbor.x, neighbor.y, maze[0].length) &&
          maze[neighbor.x][neighbor.y] !== "1" &&
          !visited.some((v) => v.x === neighbor.x && v.y === neighbor.y)
        ) {
          queue.push(neighbor);
          parents.set(`${neighbor.x} ${neighbor.y}`, curr);
        }
      }
    }

    //construct solution
    if (found) {
      const solutionPath = [];
      let last = visited[visited.length - 1];
      while (last !== null) {
        solutionPath.unshift(last);
        last = parents.get(`${last.x} ${last.y}`);
      }
      setSolutionPath(solutionPath);
      setVisitedCells(visited);
    }
  };

  const DfsAlgorithm = () => {
    //initialize
    const visited: { x: number; y: number }[] = [];
    const stack: { x: number; y: number }[] = [];
    const parents = new Map();
    parents.set("1 1", null);
    stack.push({ x: 1, y: 1 });
    let found = false;

    //iterate
    while (stack.length > 0 && !found) {
      const curr = stack.pop()!;
      visited.push(curr);
      if (maze[curr.x][curr.y] === "E") {
        found = true;
        break;
      }
      const neighbors = [
        { x: curr.x + 1, y: curr.y },
        { x: curr.x, y: curr.y + 1 },
        { x: curr.x, y: curr.y - 1 },
        { x: curr.x - 1, y: curr.y },
      ];
      for (const neighbor of neighbors) {
        if (
          isValidCell(neighbor.x, neighbor.y, maze[0].length) &&
          maze[neighbor.x][neighbor.y] !== "1" &&
          !visited.some((v) => v.x === neighbor.x && v.y === neighbor.y)
        ) {
          stack.push(neighbor);
          parents.set(`${neighbor.x} ${neighbor.y}`, curr);
        }
      }
    }

    //construct solution
    if (found) {
      const solutionPath = [];
      let last = visited[visited.length - 1];
      while (last !== null) {
        solutionPath.unshift(last);
        last = parents.get(`${last.x} ${last.y}`);
      }
      setSolutionPath(solutionPath);
      setVisitedCells(visited);
    }
  };



  useEffect(() => {
    setSolutionPath([]);
    setVisitedCells([]);

    if (selectedAlgorithm === "BFS") {
      BfsAlgorithm();
    }
    if(selectedAlgorithm === "DFS") {
      DfsAlgorithm();
    }
  }, [selectedAlgorithm]);

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
                  disabled={simulationRunning}
                  text={algorithm}
                  className={`hover:bg-white ${
                    selectedAlgorithm === algorithm && "bg-white"
                  }`}
                  action={() => setSelectedAlgorithm(algorithm)}
                />
              </li>
            ))}
          </ul>
          {selectedAlgorithm === "A*" && <span className=" text-red-400 font-medium text-xl">Under construction</span>}
        </div>

        {/* Actions section  */}
        <div className=" flex gap-2 flex-col">
          <h2 className=" font-semibold text-2xl">Actions</h2>
          <ul className=" flex gap-2 ">
            {actions.map((action) => (
              <li key={action}>
                <Button
                  text={action}
                  disabled={simulationRunning}
                  className=" hover:bg-white"
                  action={() => {
                    if (action === "Reset") {
                      resetAction();
                    }
                    if(action === "Run Simulation") {
                      runSimulationAction();
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Keys  */}
        <ul>
          <li>
            <div className=" flex gap-2 items-center">
              <div className=" w-8 h-8 bg-gray-600"></div>
              <span>Wall</span>
            </div>
          </li>
          <li>
            <div className=" flex gap-2 items-center">
              <div className=" w-8 h-8 bg-white"></div>
              <span>Start</span>
            </div>
          </li>
          <li>
            <div className=" flex gap-2 items-center">
              <div className=" w-8 h-8 bg-green-200"></div>
              <span>Solution Path</span>
            </div>
          </li>
          <li>
            <div className=" flex gap-2 items-center">
              <div className=" w-8 h-8 bg-blue-200"></div>
              <span>Visited Cells</span>
            </div>
          </li>
          <li>
            <div className=" flex gap-2 items-center">
              <div className=" w-8 h-8 bg-red-500"></div>
              <span>Target</span>
            </div>
          </li>
        </ul>

        <h2 className=" font-semibold text-blue-700 underline">
          <Link to="/">Go Home</Link>
        </h2>
      </div>

      <div>
        <Maze
          maze={maze}
          currentCell={currentCell}
          solutionPath={solutionPath}
          visitedPath={visitedCells}
        />
      </div>
    </div>
  );
};

export default Game;
