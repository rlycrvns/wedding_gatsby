import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bgBrush from '../assets/images/lite-green-stroke.svg';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin: 0 1.5rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }
  li {
    text-align: center;
    background: url(${bgBrush});
    background-repeat: no-repeat;
    background-size: 22rem;
    background-position: top;
  }
  .logoLink {
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      transform: translateY(-1rem);
    }
  }
  .navlink {
    display: block;
    font-family: HeadingReg;
    color: var(--rust);
    font-size: 2rem;
    z-index: 2;
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      color: var(--black);
      transform: translateY(-0.5rem);
    }
    @media (max-width: 1199px) {
      background-size: 18rem;
    }
  }
`;

function NavLink({ data }) {
  return (
    <li>
      <Link className="navlink" to={data.url}>
        {data.name}{' '}
      </Link>
    </li>
  );
}

export default function Nav() {
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
        <NavLink data={details} />
        <NavLink data={ourStory} />
        <Link className="logoLink" to="/">
          <Logo />
        </Link>
        <NavLink data={playlist} />
        <NavLink data={rsvp} />
      </ul>
    </NavStyles>
  );
}
