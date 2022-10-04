import { GameContext } from '../../Context/GameContext';
import Tile from '../Tile/Tile';
import { Board } from '../../Board';
import './GameBoard.css';



export default function GameBoard() {
    

  return (
    <div className="game-board">
      {Board.map((spot) => (
        <Tile key={spot.space}/>
      ))}
    </div>
  );
}