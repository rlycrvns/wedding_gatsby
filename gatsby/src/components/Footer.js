import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  p {
    font-size: 1.5rem;
    font-family: BodySemi;
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
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        Made with ❤️ 🤬 🍕 by <a href="https://github.com/rlycrvns">Riley Cravens</a> ©{new Date().getFullYear()}
      </p>
      <p className="center">
        Photography by
        <a href="https://michellebreiterphotography.com/"> Michelle Breiter Photography</a>
      </p>
    </FooterStyles>
  );
}
