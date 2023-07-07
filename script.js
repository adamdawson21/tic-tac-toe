const squares = document.querySelectorAll(".square")
const resetButton = document.querySelector("#reset-button")
let currentPlayer = "red"

// squares.forEach(square) => {
//   square.addEventListener("click", handleSquareClick)
// }

Array.from(squares).forEach(square => {
  square.addEventListener("click", function () {
    if (!square.classList.contains("red") && !square.classList.contains("blue")) {
      square.classList.add(currentPlayer);
      // ternary operator
      currentPlayer = currentPlayer === "red" ? "blue" : "red";
    }
  })
})

resetButton.addEventListener("click", function () {
  Array.from(squares).forEach(square => {
    square.classList.remove("red", "blue");
  });
  currentPlayer = "red";
})


