import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1';
import Jessica from '../components/Jessica';
import Riley from '../components/Riley';
import StoryPhotos from '../components/StoryPhotos';
import SEO from '../components/SEO';

const PageStyles = styled.div`
  .history {
    color: var(--rust);
    font-size: 3rem;
    font-family: HeadingReg;
    text-align: center;
    margin: 5rem 2rem;
  }
`;

const StoriesStyles = styled.div`
  margin-top: 5rem;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
`;

export default function OurStory({ data }) {
  const posts = data.posts.nodes;
  return (
    <>
      <SEO title="Our Story" />
      <PageStyles>
        <H1 title="Our Story" />
        <StoriesStyles>
          <Jessica posts={posts.slice(0, 1)} />
          <Riley posts={posts.slice(1, 2)} />
        </StoriesStyles>
        <h3 className="history">March 17th, 2017 - Our journey began with our first date and the rest is history...</h3>
        <StoryPhotos posts={posts.slice(2)} />
      </PageStyles>
    </>
  );
}

export const query = graphql`
  query PostsQuery {
    posts: allSanityPosts(sort: { fields: _createdAt }) {
      nodes {
        id
        name
        caption
        slug {
          current
        }
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
