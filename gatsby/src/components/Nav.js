import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bgBrush from '../assets/images/lite-green-stroke.svg';

const NavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }
  li {
    text-align: center;
  }
  a {
    display: block;
    font-family: HeadingReg;
    color: var(--rust);
    z-index: 2;
    background: url(${bgBrush});
    background-repeat: no-repeat;
    background-size: 22rem;
    background-position: center;
  }
`;

function NavLink({ data }) {
  return (
    <li>
      <Link to={data.url}>{data.name}</Link>
    </li>
  );
}

export default function Nav() {
  const home = {
    url: '/',
    name: 'Home',
  };
  const details = {
    url: '/details',
    name: 'Details',
  };
  const ourStory = {
    url: '/ourStory',
    name: 'Our Story',
  };
  const playlist = {
    url: '/playlist',
    name: 'Playlist',
  };
  const rsvp = {
    url: '/rsvp',
    name: 'Rsvp',
  };
  return (
    <NavStyles>
      <ul>
        <NavLink data={home} />
        <NavLink data={details} />
        <NavLink data={ourStory} />
        <NavLink data={playlist} />
        <NavLink data={rsvp} />
      </ul>
    </NavStyles>
  );
}
