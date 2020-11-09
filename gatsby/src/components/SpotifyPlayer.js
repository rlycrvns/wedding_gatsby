import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import Spinner from 'react-spinkit';
import styled from 'styled-components';

const SpotifyStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .spotifySpinner {
    width: 100px;
    height: 100px;
    position: absolute;
  }
  .spotifyWrapper {
    max-width: 1000px;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  #loaded {
    opacity: 1;
  }
`;

export default function SpotifyPlayer() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <SpotifyStyles>
      <Spinner name="cube-grid" id={loaded ? 'hide' : ''} className="spotifySpinner" color="#cd6647" />
      <div id={loaded ? 'loaded' : ''} className="spotifyWrapper">
        <Iframe
          url="https://open.spotify.com/embed/playlist/7m7U9TvjNUJgC0dam4RU1e"
          width="100%"
          height="500px"
          className="spotifyPlayer"
          display="initial"
          position="relative"
          allow="encrypted-media"
          loading="lazy"
        />
      </div>
    </SpotifyStyles>
  );
}
