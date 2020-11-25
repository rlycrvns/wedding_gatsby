import React from 'react';
import styled from 'styled-components';
import PinkStroke from '../assets/images/pink-stroke.svg';

export default function H1({ title }) {
  const PlaylistStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-bg {
      position: absolute;
      z-index: 2;
      width: 40rem;
    }
    h1 {
      position: relative;
      text-align: center;
      font-family: 'HeadingCursive';
      font-size: 6rem;
      color: var(--rust);
      z-index: 3;
      margin-top: 2rem;
    }
  `;
  return (
    <PlaylistStyles>
      <PinkStroke />
      <h1>{title}</h1>
    </PlaylistStyles>
  );
}
