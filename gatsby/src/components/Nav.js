import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bgBrush from '../assets/images/lite-green-stroke.svg';
import Logo from './Logo';

const NavButtonStyles = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
  text-align: center;
  z-index: 100;
  button {
    margin: 2rem;
    bottom: 2rem;
    color: var(--black);
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

function NavLink({ data }) {
  return (
    <li className="nav-link">
      <Link to={data.url}>{data.name} </Link>
    </li>
  );
}

// const useToggleNav = (initialState) => {
//   const [isNavToggled, setIsNavToggled] = useState(initialState);
//   const toggleNav = useCallback(() => setIsNavToggled((state) => !state), [setIsNavToggled]);

//   return [isNavToggled, toggleNav];
// };

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
          Menu
        </button>
      </NavButtonStyles>
      <NavStyles className={navOpen ? 'nav-open' : ''}>
        <ul>
          <NavLink data={details} />
          <NavLink data={ourStory} />
          <li className="logoLink">
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <NavLink data={playlist} />
          <NavLink data={rsvp} />
        </ul>
      </NavStyles>
    </>
  );
}
