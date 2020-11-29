import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import LogoSVG from '../assets/images/logo.svg';

const LogoStyles = styled.div`
  font-size: 0.8rem;
  width: 20em;
  height: 20em;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export default function Logo() {
  const t1 = gsap.timeline({ delay: 0.5 });

  useEffect(() => {
    t1.fromTo(
      '.logo-bg',
      { scale: 0, opacity: 0, transformOrigin: 'center' },
      { delay: 0.5, duration: 0.75, scale: 1, opacity: 1, ease: 'back.out(1.4)' }
    )
      .fromTo('.logo-jb', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 1, ease: 'power2.out' })
      .fromTo('.logo-rc', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 1, ease: 'power2.out' })
      .fromTo('.logo-border', { scale: 0, transformOrigin: 'top left' }, { scale: 1, duration: 0.5, ease: 'circ.out' })
      .fromTo(
        '.logo-plus',
        { scale: 0, opacity: 0, transformOrigin: 'center' },
        { scale: 1, opacity: 1, ease: 'back.out(1.4)' }
      );
  }, []);
  return (
    <LogoStyles className="logo">
      <LogoSVG />
    </LogoStyles>
  );
}
