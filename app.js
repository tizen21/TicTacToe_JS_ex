let currentPlayer = "X";
const cells = document.querySelectorAll("#table div");
const info = document.querySelector("#info");
let board = Array(9).fill(null);

info.textContent = `Au tour de ${currentPlayer}`;

function handleClick(event) {
  const cell = event.target;
  const cellIndex = Array.from(cells).indexOf(cell);
  if (board[cellIndex] || checkWinner()) return;
  board[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  if (checkWinner()) {
    info.textContent = `${currentPlayer} a gagné !`;
  } else if (board.every((cell) => cell)) {
    info.textContent = "Match nul !";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    info.textContent = `Au tour de ${currentPlayer}`;
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
cells.forEach((cell) => cell.addEventListener("click", handleClick));
