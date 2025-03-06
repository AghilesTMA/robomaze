export function isValidCell(x: number, y: number, mazeSize: number): boolean {
  return x > 0 && x < mazeSize - 1 && y > 0 && y < mazeSize - 1;
}
export const generateMaze = (mazeSize: number): string[][] => {
  const mazeGrid = Array.from({ length: mazeSize }, () =>
    Array(mazeSize).fill("1")
  );

  const directionOffsets = [
    [0, 2], //move right
    [2, 0], //move down
    [0, -2], //move left
    [-2, 0], // move up
  ];

  function Shuffle(array: number[][]) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  function carvePassage(currentX: number, currentY: number) {
    mazeGrid[currentX][currentY] = 0;

    const shuffledOffsets = Shuffle([...directionOffsets]);
    for (let [deltaX, deltaY] of shuffledOffsets) {
      const nextCellX = currentX + deltaX;
      const nextCellY = currentY + deltaY;
      const wallX = currentX + deltaX / 2;
      const wallY = currentY + deltaY / 2;

      if (
        isValidCell(nextCellX, nextCellY, mazeSize) &&
        mazeGrid[nextCellX][nextCellY] === "1"
      ) {
        mazeGrid[wallX][wallY] = "0";
        carvePassage(nextCellX, nextCellY);
      }
    }
  }
  carvePassage(1, 1);
  mazeGrid[1][1] = "B";
  setTarget(mazeGrid);
  return mazeGrid;
};

const setTarget = (maze: string[][]) => {
  const expanded: { x: number; y: number }[] = [{ x: 1, y: 1 }];
  const visited: { x: number; y: number }[] = [];
  const mazeSize = maze[0].length;

  while (expanded.length > 0) {
    let curr = expanded.shift();
    if (curr) {
      visited.push(curr);
      const neighbors = [
        { x: curr.x + 1, y: curr.y },
        { x: curr.x, y: curr.y + 1 },
        { x: curr.x, y: curr.y - 1 },
        { x: curr.x - 1, y: curr.y },
      ];
      neighbors.forEach((cell) => {
        if (
          isValidCell(cell.x, cell.y, mazeSize) &&
          maze[cell.x][cell.y] !== "1" &&
          !visited.some((v) => v.x === cell.x && v.y === cell.y)
        ) {
          expanded.push(cell);
        }
      });
    }
  }
  const target = visited[visited.length - 1];
  maze[target.x][target.y] = "E";
};
