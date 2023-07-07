const squares = document.querySelectorAll(".square")
const resetButton = document.querySelector("#reset-button")
let currentPlayer = "red"
let gameOver = false

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];



// squares.forEach(square) => {
//   square.addEventListener("click", handleSquareClick)
// }

Array.from(squares).forEach(square => {
  square.addEventListener("click", function () {
    if (!square.classList.contains("red") && !square.classList.contains("blue")) {
      square.classList.add(currentPlayer);
      // ternary operator
      currentPlayer = currentPlayer === "red" ? "blue" : "red";
      checkWin();
    }
  })
})

function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a].classList.contains(currentPlayer) && squares[b].classList.contains(currentPlayer) && squares[c].classList.contains(currentPlayer)) {
      // gameOver = true;
      alert(currentPlayer + "wins the game!");
      break;
    }
  }
}

resetButton.addEventListener("click", function () {
  Array.from(squares).forEach(square => {
    square.classList.remove("red", "blue");
  });
  currentPlayer = "red";
  // gameOver = false;
})




// attempting to have hover effects remain after

// https://stackoverflow.com/questions/68011525/hover-leaving-animation

// Array.from(squares).forEach(square => {
//   squares.addEventListener("mouseover", () => {
//     square.style.boxShadow = "5px 5px 2px black";
//   })
// })

// Array.from(squares).forEach(square => {
//   squares.addEventListener("mouseleave", () => {
//     square.style.boxShadow = "100px 0px 0px";
//   })
// })


// attempting to log console colors and show on UI

// function console(text) {
//   document.getElementById("console").innerHTML += currentPlayer;
// }
