import React, { useState, useContext, createContext } from 'react';
import  ReactDOM from 'react-dom';
import { ContainerS, ButtonS, OverlayS, InnerS, CloseS } from './styles/player';

interface IPlayerContext {
  showPlayer: any,
  setShowPlayer: any,
}

const PlayerContext = createContext<Partial<IPlayerContext>>({}); 

const Player: React.FC = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <ContainerS {...restProps}>
        {children}
      </ContainerS>
    </PlayerContext.Provider>
  );
};

const Video: React.FC<{src: string}> = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer} = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
    <OverlayS onClick={() => setShowPlayer(false)} data-testid="player">
      <InnerS>
        <video id="netflix-player" controls autoPlay={true}>
          <source src={src} type="video/mp4" />
        </video>
        <CloseS />
      </InnerS>
    </OverlayS>,
    document.body
  ) : null;
};

const Button: React.FC = ({ children, ...restProps }) => {
  const { showPlayer, setShowPlayer} = useContext(PlayerContext);
  return (
    <ButtonS 
      onClick={() => setShowPlayer(() => !showPlayer)}
      {...restProps}
    >
    Play
  </ButtonS>
  );
}

export default Object.assign(Player, {Video, Button});