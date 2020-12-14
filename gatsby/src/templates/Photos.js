import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PhotoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
  }

  a {
    font-family: 'HeadingCursive';
    font-size: 4rem;
    color: var(--green);
    transition: color 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      color: var(--rust);
    }
  }
`;

export default function SinglePhotoPage({ data: { photo } }) {
  return (
    <>
      <SEO title="Photo" image={photo.image?.asset?.fluid?.src} />
      <PhotoStyle>
        <Img fluid={photo.image.asset.fluid} />
        <Link to="/">Back</Link>
      </PhotoStyle>
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
