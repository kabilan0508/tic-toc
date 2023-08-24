import Square from "./UI/Square";
import classes from "./Board.module.css";
import { useState } from "react";

const Board = () => {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onClickHandler = (e) => {
    if (squares[e] || gameWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[e] = isNext ? "x" : "o";
    setSquares(nextSquares);
    setIsNext(!isNext);
  };
  const gameWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = gameWinner(squares);
  let status = winner
    ? `winner - ${winner}`
    : `Next Player - ${isNext ? "x" : "o"}`;
  const resetHandler = () => {
    setIsNext(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div className={classes.board}>
      <div className={classes.winner}>{status}</div>
      <div className={classes.row}>
        <Square
          className={classes.square}
          value={squares[0]}
          onClick={() => onClickHandler(0)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[1]}
          onClick={() => onClickHandler(1)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[2]}
          onClick={() => onClickHandler(2)}
        ></Square>
      </div>
      <div className={classes.row}>
        <Square
          className={classes.square}
          value={squares[3]}
          onClick={() => onClickHandler(3)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[4]}
          onClick={() => onClickHandler(4)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[5]}
          onClick={() => onClickHandler(5)}
        ></Square>
      </div>
      <div className={classes.row}>
        <Square
          className={classes.square}
          value={squares[6]}
          onClick={() => onClickHandler(6)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[7]}
          onClick={() => onClickHandler(7)}
        ></Square>
        <Square
          className={classes.square}
          value={squares[8]}
          onClick={() => onClickHandler(8)}
        ></Square>
      </div>
      <button className={classes.resetButton} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default Board;
