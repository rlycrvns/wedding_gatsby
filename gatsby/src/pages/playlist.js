import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1';
import SpotifyPlayer from '../components/SpotifyPlayer';
import SEO from '../components/SEO';

const PlaylistStyles = styled.div`
  margin-bottom: 5rem;
  p {
    font-family: 'BodyLight';
    text-align: center;
    font-size: 2.5rem;
    @media (max-width: 799px) {
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  a {
    display: block;
    transition: color 0.25s ease-in-out;
    background-color: var(--pink);
    font-size: 2.8rem;
    width: 300px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0 20px 50px rgba(113, 136, 120, 0.7);
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
      <SEO title="Playlist" />
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
