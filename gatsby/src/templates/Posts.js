import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .photo {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
    background-color: var(--pink);
  }
  .gatsby-image-wrapper {
    margin: 2rem 2rem 0 2rem;
  }
  h1 {
    color: var(--black);
    border-radius: 0.2rem;
    font-family: HeadingReg;
    font-size: clamp(3rem, 2.5vw, 5rem);
    background-color: var(--pale-green);
    width: 100%;
    margin-bottom: 1.5rem;
    transform: rotate(-2deg);
    margin-top: -2rem;
    padding: 0.5rem 0;
    text-align: center;
    @media (min-width: 800px) {
      width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
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

export default function SinglePostPage({ data: { post } }) {
  return (
    <>
      <SEO title="Post" image={post.image?.asset?.fluid?.src} />
      <PostGrid>
        <div className="photo">
          <Img fluid={post.image.asset.fluid} />
          <h1>{post.caption}</h1>
        </div>
        <Link to="/ourStory">Back</Link>
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
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
