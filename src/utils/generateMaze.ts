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

  function isValidCell(x: number, y: number): boolean {
    return x > 0 && x < mazeSize - 1 && y > 0 && y < mazeSize - 1;
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
        isValidCell(nextCellX, nextCellY) &&
        mazeGrid[nextCellX][nextCellY] === "1"
      ) {
        mazeGrid[wallX][wallY] = "0";
        carvePassage(nextCellX, nextCellY);
      }
    }
  }
  carvePassage(1, 1);
  return mazeGrid;
};
