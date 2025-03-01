import useMaze from "../hooks/useMaze";

const Maze = () => {
  const { maze, setMaze, currentCell } = useMaze(19);
  return (
    <div className=" flex flex-col">
      {maze.map((row, rowIdx) => (
        <div className=" flex" key={rowIdx}>
          {row.map((column, colIdx) => (
            <div
              className={` aspect-square p-2 w-6 flex justify-center items-center  ${
                (column === "1" && "bg-gray-600") || "bg-white"
              } `}
              key={colIdx}
            >
              {currentCell?.X === rowIdx && currentCell.Y === colIdx && <>C</>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;
