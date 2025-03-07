import Icon from "./Icon";

const Maze = ({
  maze,
  currentCell,
  solutionPath,
  visitedPath
}: {
  maze: string[][];
  currentCell: {
    X: number;
    Y: number;
  };
  solutionPath: { x: number; y: number }[];
  visitedPath: { x: number; y: number }[];
}) => {
  return (
    <div className=" flex flex-col">
      {maze.map((row, rowIdx) => (
        <div className=" flex" key={rowIdx}>
          {row.map((column, colIdx) => (
            <div
              className={` aspect-square min-w-6  md:min-w-8 flex justify-center items-center   ${
                (column === "1" && "bg-gray-600") || " border"
              }
                ${maze[rowIdx][colIdx] === "B" && "bg-white"}
                ${
                  solutionPath.some(
                    (cell) => cell.x === rowIdx && cell.y === colIdx
                  ) ? "bg-green-200" : visitedPath.some(
                    (cell) => cell.x === rowIdx && cell.y === colIdx
                  ) ? "bg-blue-200" : ""
                }
            `}
              key={colIdx}
            >
              {currentCell?.X === rowIdx && currentCell.Y === colIdx && (
                <Icon name="robot" className=" text-xl md:text-2xl text-blue-700" />
              )}
              {maze[rowIdx][colIdx] === "E" && (
                <Icon name="target" className=" text-xl md:text-2xl text-red-500" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;
