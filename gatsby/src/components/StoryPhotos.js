import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    height: 5100px;
  }
  a {
    margin: 1rem;
    padding: 1rem 1rem 0 1rem;
    background-color: var(--pink);
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      @media (min-width: 800px) {
        transform: scale(0.9);
      }
    }
    @media (max-width: 799px) {
      width: 80%;
      margin: 1rem auto;
    }
  }
  .gatsby-image-wrapper {
    border-radius: 0.5rem;
    width: 250px;
    @media (max-width: 799px) {
      width: 100%;
    }
  }
  p {
    color: var(--black);
    border-radius: 0.2rem;
    font-family: HeadingReg;
    font-size: 2rem;
    background-color: var(--pale-green);
    width: 100%;
    margin-bottom: 1.5rem;
    transform: rotate(-2deg);
    margin-top: -2rem;
    padding: 0.5rem 0;
    @media (min-width: 800px) {
      width: 240px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

function SinglePost({ post }) {
  return (
    <Link id={`${post.name}`} to={`/${post.slug.current}`}>
      <Img fluid={post.image.asset.fluid} alt="" />
      <p>{post.caption}</p>
    </Link>
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
