import { graphql } from 'gatsby';
import React from 'react';
import Collage from '../components/Collage';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  const photos = data.photos.nodes;
  return (
    <>
      <SEO />
      <div>
        <Collage photos={photos} />
        <h1>Home!</h1>
      </div>
    </>
  );
}

export const query = graphql`
  query PhotoQuery {
    photos: allSanityPhotos {
      nodes {
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
