import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Collage from '../components/Collage';
import SEO from '../components/SEO';
import DetailsBG from '../assets/images/index-title-bg.svg';
import H1Stroke from '../assets/images/pink-stroke.svg';
import H1StrokeInv from '../assets/images/pink-stroke-inverted.svg';
import Logo from '../components/Logo';

const MainStyles = styled.main`
  .logo {
    @media (min-width: 1000px) {
      display: none;
    }
    @media (max-width: 999px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const H1Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  h1 {
    font-family: HeadingReg;
    color: var(--green);
    font-size: clamp(4rem, 4vw, 8rem);
    max-width: 1140px;
    width: 100%;
  }
  span {
    text-align: center;
    display: block;
  }
  .h1Top {
    background: url(${H1Stroke});
  }
  .h1Bottom {
    background: url(${H1StrokeInv});
  }
  .h1Top,
  .h1Bottom {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

const DetailsStyles = styled.div`
  background: url(${DetailsBG});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  .details {
    margin: 12rem 0;
    font-family: HeadingCursive;
    color: var(--white);
    font-size: clamp(4rem, 3.5vw, 7rem);
    text-align: center;
  }
  span {
    display: block;
  }
`;

function H1() {
  return (
    <H1Styles className="heading-container">
      <h1>
        <span className="h1Top">Jessica Baron</span>
        <span className="plus-span">+</span>
        <span className="h1Bottom">Riley Cravens</span>
      </h1>
    </H1Styles>
  );
}
function Details() {
  return (
    <DetailsStyles className="details-container">
      <div className="details">
        <span>September 5, 2021</span>
        <span>Portland, Oregon </span>
      </div>
    </DetailsStyles>
  );
}

export default function HomePage({ data }) {
  const photos = data.photos.nodes;
  return (
    <>
      <SEO />
      <MainStyles>
        <Logo />
        <Collage photos={photos.slice(0, 11)} />
        <H1 />
        <Details />
        <Collage photos={photos.slice(11, 13)} />
      </MainStyles>
    </>
  );
}

export const query = graphql`
  query PhotoQuery {
    photos: allSanityPhotos {
      nodes {
        name
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
