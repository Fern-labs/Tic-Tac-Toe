const gameBoard = (function () {
  let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const winningCombos = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // col 1
    [1, 4, 7], // col 2
    [2, 5, 8], // col 3
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];

  const addToBoard = (symbol, rowIndex, columnIndex) =>
    (board[rowIndex][columnIndex] = symbol);

  const checkWinners = () => {
    //flatten board
    const flatBoard = board.flat();
    //board now looks like ["X", " ", " ", " ", "X", " ", " ", " ", "X"]
    //which match the winning combos
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      const firstCell = flatBoard[a];
      if (
        firstCell !== " " && // not empty
        firstCell === flatBoard[b] &&
        firstCell === flatBoard[c]
      ) {
        return firstCell; // return "X" or "O"
      }
    }
    return null; // no winner
  };

  const printBoard = () => console.log(board);

  return { printBoard, addToBoard, checkWinners };
})();

gameBoard.printBoard();
gameBoard.addToBoard("X", 2, 2);
gameBoard.addToBoard("X", 1, 1);
gameBoard.addToBoard("o", 0, 0);
console.log(gameBoard.checkWinners());

//function players(name, symbol) {}

//const gameStartAndReset = () => {};
