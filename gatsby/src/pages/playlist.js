import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1';
import SpotifyPlayer from '../components/SpotifyPlayer';

const PlaylistStyles = styled.div`
  margin-bottom: 5rem;
  p {
    text-align: center;
    font-size: 2.5rem;
  }
  a {
    transition: color 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      color: var(--rust);
    }
  }
`;

export default function PlaylistPage() {
  return (
    <>
      <PlaylistStyles>
        <H1 title="Playlist" />
        <p>Help us build the perfect playlist for our reception!</p>
        <p>
          Add songs to our official
          <a
            href="https://open.spotify.com/playlist/7m7U9TvjNUJgC0dam4RU1e?si=_8euDRYAQOmxJ18pWqzcxA"
            rel="noreferrer"
            target="_blank"
          >
            &nbsp;Spotify Playlist
          </a>
        </p>
      </PlaylistStyles>
      <SpotifyPlayer />
    </>
  );
}
