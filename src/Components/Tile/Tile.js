import { useContext, useState } from 'react';
import { GameContext } from '../../Context/GameContext';
import './Tile.css';
// import { Board } from '../../Board';

export default function Tile({ space, content }) {
  
  const { player, setPlayer, board, setBoard, active } = useContext(GameContext);

  function handleClick() {
    // console.log(board[0]);
    if (active === true) {  
      if (content === '') {
        setBoard(prevState => (prevState.map((obj) => obj.space === space ? { ...obj, content: player } : obj)));
        if (player === 'X') {
          setPlayer('O');
        } else {
          setPlayer('X');
        } 
      }
    }
  }
  
  return (
    <div className="tile" onClick={handleClick}>
      <div>{content}</div>
    </div>
  );
}