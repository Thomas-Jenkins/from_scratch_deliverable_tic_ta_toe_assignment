import { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';
import './Tile.css';


export default function Tile() {
  
  const { player, setPlayer } = useContext(GameContext);

  function handleClick() {
    if (player === 'X') {
      setPlayer('Y');
    } else if (player === 'Y') {
      setPlayer('X');
    }
  }
  
  return (
    <div className="tile" onClick={handleClick}>
      
    </div>
  );
}