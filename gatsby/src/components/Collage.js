import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const CollageStyles = styled.div`
  background-color: var(--rust);
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;
  .Hero {
    grid-column: span 3;
  }
  .photo1 {
    grid-column: span 2;
  }
  .photo2 {
    grid-column: span 3;
  }
  .photo3 {
    grid-column: span 2;
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
    grid-column: span 2;
  }
  .photo8 {
    grid-column: span 2;
    grid-row: span 2;
    picture {
      img {
        object-position: 25% center !important;
      }
    }
  }
  .photo9 {
    grid-column: span 3;
  }
  .photo10 {
    grid-column: span 2;
  }
  .photo11 {
    grid-column: span 6;
  }
  .photo12 {
    grid-column: span 6;
  }
  @media (max-width: 999px) {
    margin: 0;
  }
  @media (max-width: 699px) {
    grid-template-columns: repeat(11, 1fr);
    .photo2 {
      grid-column: span 4;
      grid-row: span 2;
    }
    .photo6 {
      grid-column: span 4;
      grid-row: span 2;
    }
    .photo7 {
      grid-column: span 3;
    }
    .photo8 {
      grid-row: span 3;
    }
    .photo9 {
      grid-column: span 4;
    }
    .photo10 {
      grid-column: span 3;
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
  return <Img className={photo.name} fluid={photo.image.asset.fluid} alt="" />;
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