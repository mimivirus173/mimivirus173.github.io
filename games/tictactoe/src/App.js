import { useState } from 'react';

// Board display
export default function Board() {
  // Array counting squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Board display
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

// Squares in the board
function Square() {
  const [value, setValue] = useState(null);
  
  // When clicking square
  function handleClick() {
    setValue('X');
  }

  // Button display
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
