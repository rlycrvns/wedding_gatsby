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
      <h2 className="heading">2016</h2>
      <p className="content">
        This was an incredibly life changing and transformative year that I feel can’t be left out of our love story.
        <br />
        <br />
        In this year I ended a relationship that was long past it’s expiration date, left a job that I felt was no
        longer where I should be, and said goodbye to the home I grew up in. I was emotionally raw but absolutely
        determined to find myself again and set out to do a lot of scary, spontaneous and lively activities to help me
        do that.
      </p>
      <h2 className="heading">New Years 2017</h2>
      <p className="content">
        I brought in the new year eating Spanish food and dancing to disco with some amazing friends. I reflected on the
        experiences that made me more bold, more loving, more open, more me and I promised myself that with my 25th
        birthday coming up that year, I was going to make it the best one of my life.
      </p>
      <h2 className="heading">February 2017</h2>
      <p className="content">
        I wasn’t in any mindset of wanting a serious relationship, just dipping my toes back into the dating pool so I
        joined OKCupid. This was an entirely overwhelming and exhausting experience that I almost quit multiple times
        (very glad that didn’t happen!) My profile itself didn’t have a lot of information on it, and while browsing
        through some other profiles, I came across one about a guy who said he was a “vegan nerd” who dressed up in Star
        Wars outfits. His profile photos were intimidating and I wasn’t sure I would be able to date a vegan, but his
        profile did inspire me to add “Star Wars, duh” under my movies section.
      </p>
      <h2 className="heading">March 14th, 2017</h2>
      <p className="content">
        I got a message from that same profile that read: “You had me at "Star Wars duh", want to hang out and get food
        and or a drink(not necessarily alcohol)?”
        <br />
        <br />
        That guy was Riley.
      </p>
    </ProfileStyles>
  );
}

export default function Jessica({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Profile key={post.id} post={post} />
      ))}
    </div>
  );
}
