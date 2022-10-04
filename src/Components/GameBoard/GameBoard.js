import { GameContext } from '../../Context/GameContext';
import Tile from '../Tile/Tile';
import { Board } from '../../Board';
import './GameBoard.css';
import { useContext } from 'react';



export default function GameBoard() {
    
  const { player, setPlayer } = useContext(GameContext);

  return (
    <>
      <div>
        {player} it is your turn!
      </div>
      <div className="game-board">
        {Board.map((spot) => (
          <Tile key={spot.space}/>
        ))}
      </div>
    </>
  );
}