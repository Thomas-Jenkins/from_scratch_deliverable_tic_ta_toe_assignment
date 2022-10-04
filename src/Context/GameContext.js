import { createContext, useState } from 'react';
import { Board } from '../Board';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(player);
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(Board);
  const [winner, setWinner] = useState('');
  const [draw, setDraw] = useState(false);


  return <GameContext.Provider value= {{ player, setPlayer, gameMessage, setGameMessage, active, setActive, board, setBoard, winner, setWinner, draw, setDraw }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };
