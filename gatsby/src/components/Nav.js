import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import BgBrush from '../assets/images/lite-green-stroke.svg';
import Logo from './Logo';

const NavButtonStyles = styled.div`
  position: fixed;
  width: 100%;
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
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;

const NavStyles = styled.nav`
  margin: 0 1.5rem;
  overflow-x: hidden;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }
  li {
    text-align: center;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .link-bg {
      position: absolute;
      width: 25rem;
      z-index: 14;
    }
    a {
      position: relative;
      z-index: 15;
      display: block;
      font-family: 'HeadingReg';
      color: var(--rust);
      font-size: 2rem;
      transition: all 0.25s ease-in-out;
      &:hover,
      &:active,
      &:focus {
        color: var(--black);
        transform: translateY(-0.5rem);
      }
    }
  }
  @media (min-width: 1000px) {
    .home {
      display: none;
    }
  }
  @media (max-width: 999px) {
    margin: 0;
    background: linear-gradient(-45deg, var(--bg) 50%, var(--white) 100%);
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ul {
      padding-top: 5rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 6rem 6rem 6rem 6rem;
      align-items: center;
    }
    .logoLink {
      display: none;
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

function NavButton({ navOpen, setNavOpen }) {
  function NavClick() {
    setNavOpen((prevnavOpen) => !prevnavOpen);
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
  return (
    <NavButtonStyles>
      <button onClick={() => NavClick()} aria-expanded={navOpen === true ? 'true' : 'false'} type="button">
        {navOpen ? <MdClose /> : <MdMenu />}
      </button>
    </NavButtonStyles>
  );
}

function NavLink({ data, setNavOpen, className }) {
  return (
    <li className={className}>
      <BgBrush />
      <Link onClick={() => setNavOpen(false)} to={data.url}>
        {data.name}{' '}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

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
    <>
      <NavStyles className={navOpen ? 'nav-open' : ''}>
        <ul>
          <NavLink className="home nav-link" navOpen={navOpen} setNavOpen={setNavOpen} data={home} />
          <NavLink className="details nav-link" navOpen={navOpen} setNavOpen={setNavOpen} data={details} />
          <NavLink className="story nav-link" navOpen={navOpen} setNavOpen={setNavOpen} data={ourStory} />
          <li className="logoLink">
            <Link onClick={() => setNavOpen(false)} to="/">
              <Logo />
            </Link>
          </li>
          <NavLink className="playlist nav-link" navOpen={navOpen} setNavOpen={setNavOpen} data={playlist} />
          <NavLink className="rsvp nav-link" navOpen={navOpen} setNavOpen={setNavOpen} data={rsvp} />
        </ul>
      </NavStyles>
      <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
}
