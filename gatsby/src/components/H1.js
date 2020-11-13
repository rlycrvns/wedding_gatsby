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
      margin-top: 2rem;
    }
    &::before {
      content: '';
      background: url(${pinkStroke});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      width: 100%;
      height: 50px;
      z-index: 1;
      @media (min-width: 500px) {
        transform: scale(1.5);
        width: 300px;
      }
    }
  `;
  return (
    <PlaylistStyles>
      <h1>{title}</h1>
    </PlaylistStyles>
  );
}
