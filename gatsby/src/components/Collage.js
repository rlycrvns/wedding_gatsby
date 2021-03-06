import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CollageStyles = styled.div`
  background-color: var(--pink);
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 0.5rem;
  .gatsby-image-wrapper {
    height: 100%;
  }
  a {
    transition: all 0.5s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      @media (min-width: 800px) {
        transform: scale(0.9);
      }
    }
  }
  .photo0 {
    grid-column: span 3;
  }
  .photo1 {
    grid-column: span 2;
  }
  .photo2 {
    grid-column: span 3;
  }
  .photo3 {
    grid-column: span 3;
    grid-row: span 2;
  }
  .photo4 {
    grid-column: span 2;
  }
  .photo6 {
    grid-column: span 5;
    grid-row: span 2;
  }
  .photo7 {
    grid-column: span 3;
  }
  .photo8 {
    grid-column: span 3;
    grid-row: span 2;
  }
  .photo9 {
    grid-column: span 3;
  }
  .photo10 {
    grid-column: span 3;
  }
  .photo11 {
    grid-column: span 7;
  }
  .photo12 {
    grid-column: span 7;
  }
  @media (max-width: 999px) {
    margin: 0;
  }
  @media (max-width: 699px) {
    grid-template-columns: repeat(8, 1fr);
    .photo0 {
      grid-column: span 5;
      grid-row: span 3;
    }
    .photo1 {
      grid-column: span 3;
      grid-row: span 2;
    }
    .photo2 {
      grid-column: span 3;
      grid-row: span 3;
    }
    .photo5 {
      grid-column: span 2;
    }
    .photo6 {
      grid-column: span 4;
      grid-row: span 2;
    }
    .photo7 {
      grid-column: span 4;
      grid-row: span 2;
    }
    .photo8 {
      grid-column: span 4;
      grid-row: span 4;
    }
    .photo9 {
      grid-column: span 4;
    }
    .photo10 {
      grid-column: span 4;
    }
    .photo11 {
      grid-column: span 11;
    }
    .photo12 {
      grid-column: span 11;
    }
  }
`;

function SinglePhoto({ photo }) {
  return (
    <Link className={photo.name} to={`/${photo.slug.current}`}>
      <Img fluid={photo.image.asset.fluid} alt="" />
    </Link>
  );
}

export default function Collage({ photos }) {
  return (
    <CollageStyles className="photo-collage">
      {photos.map((photo) => (
        <SinglePhoto key={photo.id} photo={photo} />
      ))}
    </CollageStyles>
  );
}
