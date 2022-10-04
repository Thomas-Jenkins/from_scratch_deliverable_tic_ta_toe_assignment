import { GameContext } from '../../Context/GameContext';
import Tile from '../Tile/Tile';
import './GameBoard.css';
import { useContext } from 'react';



export default function GameBoard() {
    
  const { player, board, active, setActive, winner, setWinner, draw, setDraw } = useContext(GameContext);

  checkWin();
  checkDraw();

  

  function checkWin() {
    if (board[0].content === 'X' && 
    board[1].content === 'X' &&
    board[2].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[3].content === 'X' && 
    board[4].content === 'X' &&
    board[5].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[6].content === 'X' && 
    board[7].content === 'X' &&
    board[8].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[0].content === 'X' && 
    board[3].content === 'X' &&
    board[6].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[1].content === 'X' && 
    board[4].content === 'X' &&
    board[7].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[2].content === 'X' && 
    board[5].content === 'X' &&
    board[8].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[0].content === 'X' && 
    board[4].content === 'X' &&
    board[8].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    if (board[2].content === 'X' && 
    board[4].content === 'X' &&
    board[6].content === 'X') {
      setWinner('X');
      setActive(false);
    }
    // 
    if (board[0].content === 'O' && 
    board[1].content === 'O' &&
    board[2].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[3].content === 'O' && 
    board[4].content === 'O' &&
    board[5].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[6].content === 'O' && 
    board[7].content === 'O' &&
    board[8].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[0].content === 'O' && 
    board[3].content === 'O' &&
    board[6].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[1].content === 'O' && 
    board[4].content === 'O' &&
    board[7].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[2].content === 'O' && 
    board[5].content === 'O' &&
    board[8].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[0].content === 'O' && 
    board[4].content === 'O' &&
    board[8].content === 'O') {
      setWinner('O');
      setActive(false);
    }
    if (board[2].content === 'O' && 
    board[4].content === 'O' &&
    board[6].content === 'O') {
      setWinner('O');
      setActive(false);
    }
  }
  
  function checkDraw() {
    if (board[0].content !== '' && 
  board[1].content !== '' && 
  board[2].content !== '' && 
  board[3].content !== '' && 
  board[4].content !== '' && 
  board[5].content !== '' && 
  board[6].content !== '' && 
  board[7].content !== '' && 
  board[8].content !== '') {
      checkWin();
      if (winner === '') {
        setDraw(true);
        setActive(false);
      }
    }
  }

  if (active === true) {
    return (
      <>
        {player} its your turn
        <div className="game-board">
          {board.map((spot) => (
            <Tile key={spot.space} content={spot.content} space={spot.space}/>
          ))}
        </div>
      </>
    );
  }

  if (draw === true && winner === '') {
    return (
      <>
        This Game is a Draw, Do better.
        <div className="game-board">
          {board.map((spot) => (
            <Tile key={spot.space} content={spot.content} space={spot.space}/>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {winner} Has Won the Game!
      </div>
      <div className="game-board">
        {board.map((spot) => (
          <Tile key={spot.space} content={spot.content} space={spot.space}/>
        ))}
      </div>
    </>
  );
}