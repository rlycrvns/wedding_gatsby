import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PhotoGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SinglePhotoPage({ data: { photo } }) {
  return (
    <>
      <SEO title="Photo" image={photo.image?.asset?.fluid?.src} />
      <PhotoGrid>
        <Img fluid={photo.image.asset.fluid} />
      </PhotoGrid>
    </>
  );
}
export const query = graphql`
  query($slug: String!) {
    photo: sanityPhotos(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
