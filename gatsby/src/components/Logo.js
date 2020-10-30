import React from 'react';
import styled from 'styled-components';
import bgBrush from '../assets/images/lite-green-stroke.svg';

const LogoStyles = styled.div`
  font-size: clamp(7px, 0.65vw, 9px);
  width: 20em;
  height: 20em;
  background: linear-gradient(-135deg, var(--bg) 15%, var(--pink) 50%, var(--bg) 85%);
  border: 1rem solid var(--green);
  border-image: url(${bgBrush}) 5 20 15 18;
  border-image-width: 2rem;
  border-image-outset: 1rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .inner {
    width: 100%;
    padding-top: 3rem;
  }
  .names {
    display: flex;
    justify-content: space-around;
  }
  .letter {
    font-size: 7em;
    color: var(--rust);
    font-family: HeadingCursive;
  }
  .riley {
    padding-right: 1rem;
  }
  .plus {
    color: var(--green);
    text-align: center;
    line-height: 3rem;
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
