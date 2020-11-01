import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import bgBrush from '../assets/images/lite-green-stroke.svg';
import Logo from './Logo';

const NavButtonStyles = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
  text-align: center;
  z-index: 100;
  display: flex;
  justify-content: center;
  button {
    margin: 2rem;
    bottom: 2rem;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
    @media (max-width: 1199px) {
      background-size: 18rem;
    }
  }
  .logoLink {
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      transform: translateY(-1rem);
    }
  }
  .nav-link {
    a {
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
    }
  }
  @media (max-width: 999px) {
    margin: 0;
    background: linear-gradient(-45deg, var(--bg) 50%, var(--white) 100%);
    position: fixed;
    width: 100vw;
    height: 100vh;
    transform: translateY(-100vh);
    transition: transform 0.8s ease-in-out;
    ul {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 6rem 6rem 6rem 6rem;
      align-items: center;
    }
    .logoLink {
      grid-row: 1;
    }
    .nav-link {
      background-position: center;
      background-size: 30rem;
      a {
        font-size: 4rem;
      }
    }
  }
`;

function NavLink({ data, setNavOpen }) {
  return (
    <li className="nav-link">
      <Link onClick={() => setNavOpen(false)} to={data.url}>
        {data.name}{' '}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

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
    <>
      <NavButtonStyles>
        <button
          onClick={() => setNavOpen((prevnavOpen) => !prevnavOpen)}
          aria-expanded={navOpen === true ? 'true' : 'false'}
          type="button"
        >
          {navOpen ? <MdClose /> : <MdMenu />}
        </button>
      </NavButtonStyles>
      <NavStyles className={navOpen ? 'nav-open' : ''}>
        <ul>
          <NavLink navOpen={navOpen} setNavOpen={setNavOpen} data={details} />
          <NavLink navOpen={navOpen} setNavOpen={setNavOpen} data={ourStory} />
          <li className="logoLink">
            <Link onClick={() => setNavOpen(false)} to="/">
              <Logo />
            </Link>
          </li>
          <NavLink navOpen={navOpen} setNavOpen={setNavOpen} data={playlist} />
          <NavLink navOpen={navOpen} setNavOpen={setNavOpen} data={rsvp} />
        </ul>
      </NavStyles>
    </>
  );
}
