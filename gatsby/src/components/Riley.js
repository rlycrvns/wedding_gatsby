import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProfileStyles = styled.div`
  padding: 0 4rem;
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 auto;
    border-radius: 50%;
    @media (min-width: 1200px) {
      width: 500px;
    }
  }
  .heading {
    color: var(--rust);
    font-family: HeadingReg;
  }
  .content {
    font-size: 2rem;
    color: vaR(--black);
  }
`;

function Profile({ post }) {
  return (
    <ProfileStyles>
      <Img fluid={post.image.asset.fluid} alt="" />
      <h2 className="heading">2013</h2>
      <p className="content">
        I packed up all of my belongings in Colorado and made a new home in Portland, Oregon. I generally considered
        this to be a gigantic mistake for the next several years. Hindsight says that it was actually the best decision.
      </p>
      <h2 className="heading">2015</h2>
      <p className="content">
        After spending a couple years in the service industry, I enrolled at Portland Community College with the goal of
        setting myself up with a new career before I turned 30.
      </p>
      <h2 className="heading">2016</h2>
      <p className="content">
        A few months after ending a sour relationship, I reactivated my OkCupid even though it’s what landed me in said
        relationship. *shrug emoji* Based on past experience, I wasn’t expecting much but figured I’d see who was out
        there. I decided to move back to Colorado in December and booked a Uhaul. At the last minute I got cold feet and
        decided to stay in Portland.
      </p>
      <h2 className="heading">March 14th, 2017</h2>
      <p className="content">
        I came across a cute girl with a messy cascading bun next to a mountain lake who self identified as a cat mom. I
        read through the sparse, and somewhat hostile, info on her profile several times. I was intimidated and
        enamoured. I deliberated for days on whether or not to message her and what I would even say. Eventually I
        noticed that she had added “Star Wars duh” to her movies and thus, full of doubt and insecurity, I sent a
        message… “You had me at Star Wars duh”.
      </p>
    </ProfileStyles>
  );
}

export default function Riley({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Profile key={post.id} post={post} />
      ))}
    </div>
  );
}
