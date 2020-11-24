import React from 'react';
import styled from 'styled-components';
import bgBrush from '../assets/images/lite-green-stroke.svg';

const LogoStyles = styled.div`
  font-size: clamp(5px, 0.45vw, 7px);
  width: 14em;
  height: 14em;
  background: linear-gradient(-135deg, var(--bg) 15%, var(--pink) 50%, var(--bg) 85%);
  background-repeat: no-repeat;
  border: 1rem solid var(--green);
  border-image: url(${bgBrush}) 5 20 15 18;
  border-image-width: 1rem;
  border-image-outset: 0rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-top: 0;
  }
  .inner {
    width: 100%;
    padding-top: 2rem;
  }
  .names {
    display: flex;
    justify-content: space-around;
  }
  .letter {
    font-size: 4em;
    color: var(--rust);
    font-family: 'HeadingCursive';
  }
  .riley {
    padding-right: 1rem;
  }
  .plus {
    color: var(--green);
    text-align: center;
    line-height: 2rem;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <div className="names jessica">
          <span className="letter j">J</span>
          <span className="letter b">B</span>
        </div>
        <div className="letter plus">+</div>
        <div className="names riley">
          <span className="letter r">R</span>
          <span className="letter c">C</span>
        </div>
      </div>
    </LogoStyles>
  );
}
