import Icon from "./Icon";

const Maze = ({
  maze,
  setMaze,
  currentCell,
}: {
  maze: string[][];
  setMaze: React.Dispatch<React.SetStateAction<string[][]>>;
  currentCell: {
    X: number;
    Y: number;
  };
}) => {
  return (
    <div className=" flex flex-col">
      {maze.map((row, rowIdx) => (
        <div className=" flex" key={rowIdx}>
          {row.map((column, colIdx) => (
            <div
              className={` aspect-square w-8 flex justify-center items-center   ${
                (column === "1" && "bg-gray-600") || " border"
              }
                ${maze[rowIdx][colIdx] === "B" && "bg-white"}
            `}
              key={colIdx}
            >
              {currentCell?.X === rowIdx && currentCell.Y === colIdx && <Icon name="robot" className=" text-2xl text-blue-700" />}
              {maze[rowIdx][colIdx] === "E" && <Icon name="target" className=" text-2xl text-red-500" />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;
