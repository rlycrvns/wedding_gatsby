import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  margin-top: 10rem;
  margin-bottom: 2rem;
  p {
    font-size: 1.5rem;
    font-family: 'Body';
  }
  a {
    color: var(--green);
    transition: color 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      color: var(--rust);
    }
  }
  @media (max-width: 999px) {
    margin: 10rem 1.5rem 8rem 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        Photography by
        <a href="https://michellebreiterphotography.com/"> Michelle Breiter Photography</a>
      </p>
    </FooterStyles>
  );
}
