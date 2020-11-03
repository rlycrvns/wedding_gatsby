import { graphql } from 'gatsby';
import React from 'react';
import Collage from '../components/Collage';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  const photos = data.photos.nodes;
  return (
    <>
      <SEO />
      <main>
        <Collage photos={photos} />
        <h1>Home!</h1>
      </main>
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
