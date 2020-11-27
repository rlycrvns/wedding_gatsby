import { graphql } from 'gatsby';
import React from 'react';
import H1 from '../components/H1';
import StoryPhotos from '../components/StoryPhotos';

export default function OurStory({ data }) {
  const posts = data.posts.nodes;
  return (
    <div>
      <H1 title="Our Story" />
      <div className="photos-container">
        <StoryPhotos posts={posts.slice(2)} />
      </div>
    </div>
  );
}

export const query = graphql`
  query PostsQuery {
    posts: allSanityPosts(sort: { fields: _createdAt }) {
      nodes {
        id
        caption
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
