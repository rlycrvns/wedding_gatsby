import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PostStyles = styled.div`
  display: flex;
`;

function SinglePost({ post }) {
  return <Img fluid={post.image.asset.fluid} alt="" />;
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
