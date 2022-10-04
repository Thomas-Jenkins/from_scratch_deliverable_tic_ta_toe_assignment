import { useContext, createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(player);
  const [active, setActive] = useState(true);

  return <GameContext.Provider value= {{ player, setPlayer, gameMessage, setGameMessage, active, setActive }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext }
