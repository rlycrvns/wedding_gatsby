import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import LogoSVG from '../assets/images/logo-paths.svg';

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
  const t1 = gsap.timeline();

  useEffect(() => {
    t1.fromTo(
      '.logo-bg',
      { scale: 0, opacity: 0, transformOrigin: 'center' },
      { delay: 0.5, duration: 1, scale: 1, opacity: 1, ease: 'back.out(1.4)' }
    )
      .fromTo('.letter-j', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .fromTo('.letter-b', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .fromTo('.letter-r', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .fromTo('.letter-c', { opacity: 0, transformOrigin: 'center' }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .fromTo(
        '.logo-plus',
        { scale: 0, opacity: 0, transformOrigin: 'center' },
        { scale: 1, opacity: 1, ease: 'back.out(1.4)' }
      )
      .fromTo('.logo-border', { strokeWidth: 0 }, { strokeWidth: 20, ease: 'none' });
  }, []);
  return (
    <LogoStyles className="logo">
      <LogoSVG />
    </LogoStyles>
  );
}
