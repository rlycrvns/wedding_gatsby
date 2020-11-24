import React, { useState } from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';

const SpotifyStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
    margin: 0 30px;
  }
  iframe {
    height: 500px;
    @media (min-width: 999px) {
      height: 1000px;
    }
  }
  #loaded {
    opacity: 1;
  }
`;

export default function SpotifyPlayer() {
  const [loaded, setLoaded] = useState(false);

  function iframeLoaded() {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }
  }
  return (
    <SpotifyStyles>
      <Spinner name="cube-grid" id={loaded ? 'hide' : ''} className="spotifySpinner" color="#cd6647" />
      <di v id={loaded ? 'loaded' : ''} className="spotifyWrapper">
        <iframe
          title="spotifyPlayer"
          src="https://open.spotify.com/embed/playlist/7m7U9TvjNUJgC0dam4RU1e"
          width="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          onLoad={iframeLoaded()}
        />
      </di>
    </SpotifyStyles>
  );
}
