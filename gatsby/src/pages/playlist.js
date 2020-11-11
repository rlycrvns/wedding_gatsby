import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1';
import SpotifyPlayer from '../components/SpotifyPlayer';

const PlaylistStyles = styled.div``;

export default function PlaylistPage() {
  return (
    <div>
      <H1 title="Playlist" />
      <p>Help us build the perfect playlist!</p>
      <p>
        Add songs to our official
        <a
          href="https://open.spotify.com/playlist/7m7U9TvjNUJgC0dam4RU1e?si=_8euDRYAQOmxJ18pWqzcxA"
          rel="noreferrer"
          target="_blank"
        >
          Spotify Playlist
        </a>
      </p>
      <SpotifyPlayer />
    </div>
  );
}
