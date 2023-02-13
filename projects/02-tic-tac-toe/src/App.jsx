import { useState } from 'react';
import confetti from 'canvas-confetti'

import { Square } from './components/Square';
import { TURNS, WINNER_COMBOS } from './constants';
import { WinnerModal } from './components/WinnerModal';

function App() {

  const initialBoard = Array(9).fill(null);

  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoard;
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null: there is no winner, false: draw

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) return boardToCheck[a]
    }
  }

  const checkEndGame = boardToCheck => boardToCheck.every(square => square !== null)

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    localStorage.setItem('board', JSON.stringify(newBoard));
    localStorage.setItem('turn', newTurn);

    const newWinner = checkWinner(newBoard);
    const draw = checkEndGame(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
    if (draw) setWinner(false);
    if (newWinner || draw) {
      localStorage.removeItem('board');
      localStorage.removeItem('turn');
    }
  }

  const resetGame = () => {
    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App