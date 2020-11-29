import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SinglePostStyles = styled.div`
  margin: 1rem;
  padding: 1rem 1rem 0 1rem;
  background-color: var(--pink);
  border-radius: 0.2rem;
  box-shadow: 0px 0px 5px 0px var(--black);
  @media (max-width: 799px) {
    width: 95%;
  }
  .gatsby-image-wrapper {
    border-radius: 0.2rem;
    width: 250px;
    @media (max-width: 799px) {
      width: 100%;
    }
  }
  p {
    font-family: BodySemi;
    font-size: 2rem;
    background-color: var(--pale-green);
    width: 100%;
    margin-bottom: 1.5rem;
    font-weight: 400;
    transform: rotate(-2deg);
    margin-top: -2rem;
    @media (min-width: 800px) {
      width: 250px;
    }
  }
`;

const PostStyles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  align-items: flex-start;
  @media (min-width: 800px) {
    height: 13000px;
  }
  @media (min-width: 900px) {
    height: 9000px;
  }
  @media (min-width: 1200px) {
    height: 7000px;
  }
  @media (min-width: 1500px) {
    height: 5200px;
  }
`;

function SinglePost({ post }) {
  return (
    <SinglePostStyles>
      <Img fluid={post.image.asset.fluid} alt="" />
      <p>{post.caption}</p>
    </SinglePostStyles>
  );
}

export default function StoryPhotos({ posts }) {
  return (
    <PostStyles>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </PostStyles>
  );
}
