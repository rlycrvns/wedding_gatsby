import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PostGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SinglePostPage({ data: { post } }) {
  return (
    <>
      <SEO title="Post" image={post.image?.asset?.fluid?.src} />
      <PostGrid>
        <Img fluid={post.image.asset.fluid} />
        <h1>{post.name}</h1>
      </PostGrid>
    </>
  );
}
export const query = graphql`
  query($slug: String!) {
    post: sanityPosts(slug: { current: { eq: $slug } }) {
      caption
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
