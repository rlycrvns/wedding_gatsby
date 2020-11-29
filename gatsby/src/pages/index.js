import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Collage from '../components/Collage';
import SEO from '../components/SEO';
import DetailsBG from '../assets/images/index-title-bg.svg';
import H1Stroke from '../assets/images/pink-stroke.svg';
import H1StrokeInv from '../assets/images/pink-stroke-inverted.svg';
import Logo from '../components/Logo';

gsap.registerPlugin(ScrollTrigger);

const MainStyles = styled.main`
  margin-top: 0;
  @media (min-width: 1000px) {
    margin-top: 10rem;
  }
  .logo {
    @media (min-width: 1000px) {
      display: none;
    }
    @media (max-width: 999px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
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
    position: relative;
    font-family: HeadingReg;
    color: var(--green);
    font-size: clamp(4rem, 4vw, 8rem);
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    position: relative;
    text-align: center;
    display: block;
  }
  .plus-span {
    font-family: HeadingCursive;
    color: var(--rust);
    height: 3rem;
    line-height: 5rem;
    margin: 2rem 0;
  }
  .top-bg,
  .bottom-bg {
    position: absolute;
    width: 100%;
    @media (min-width: 600px) {
      width: clamp(50rem, 40vw, 80rem);
    }
  }
  .top-bg {
    top: 0;
  }
  .bottom-bg {
    bottom: 0;
  }
`;

const DetailsStyles = styled.div`
  overflow-x: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  .details-bg {
    position: absolute;
    z-index: 4;
    max-width: 1200px;
    width: 130%;
    @media (min-width: 1000px) {
      width: 100%;
    }
  }
  .details {
    position: relative;
    z-index: 5;
    margin: 6rem 0;
    font-family: HeadingCursive;
    color: var(--white);
    font-size: clamp(4rem, 3.5vw, 7rem);
    text-align: center;
    @media (min-width: 1000px) {
      margin: 12rem 0;
    }
  }
  span {
    display: block;
  }
`;

function HomeH1() {
  const t1 = gsap.timeline();
  useEffect(() => {
    t1.fromTo(
      '.top-bg',
      {
        scaleX: 0,
        transformOrigin: 'left',
      },
      {
        scrollTrigger: {
          trigger: '.heading-container',
          start: 'top bottom-=200px',
        },
        duration: 2,
        scaleX: 1,
        ease: 'slow',
      }
    ).fromTo(
      '.bottom-bg',
      {
        scaleX: 0,
        transformOrigin: 'right',
      },
      {
        scrollTrigger: {
          trigger: '.heading-container',
          start: 'top bottom-=200px',
        },
        duration: 2,
        scaleX: 1,
        ease: 'slow',
      }
    );
  }, []);
  return (
    <H1Styles className="heading-container">
      <h1>
        <H1Stroke />
        <span className="h1Top">Jessica Baron</span>
        <span className="plus-span">+</span>
        <H1StrokeInv />
        <span className="h1Bottom">Riley Cravens</span>
      </h1>
    </H1Styles>
  );
}
function Details() {
  return (
    <DetailsStyles className="details-container">
      <DetailsBG />
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
        <HomeH1 />
        <Details />
        <Collage photos={photos.slice(11, 13)} />
      </MainStyles>
    </>
  );
}

export const query = graphql`
  query PhotoQuery {
    photos: allSanityPhotos(sort: { fields: _createdAt }) {
      nodes {
        id
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
