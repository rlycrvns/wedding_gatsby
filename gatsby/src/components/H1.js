import React from 'react';
import styled from 'styled-components';
import pinkStroke from '../assets/images/pink-stroke.svg';

export default function H1({ title }) {
  const PlaylistStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      position: relative;
      text-align: center;
      font-family: 'HeadingCursive';
      font-size: 6rem;
      color: var(--rust);
      z-index: 3;
    }
    &::before {
      content: url(${pinkStroke});
      position: absolute;
      width: 300px;
      height: 42px;
      z-index: 1;
      transform: scale(1.5);
    }
  `;
  return (
    <PlaylistStyles>
      <h1>{title}</h1>
    </PlaylistStyles>
  );
}
