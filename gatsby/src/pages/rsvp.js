import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1';
import SEO from '../components/SEO';

const RSVPStyles = styled.div`
  p {
    text-align: center;
    font-family: 'BodyLight';
    font-size: 2.5rem;
    width: 80%;
    margin: auto;
    margin-top: 4rem;
    @media (min-width: 800px) {
      font-size: 4.5rem;
    }
  }
`;

export default function Rsvp() {
  return (
    <>
      <SEO title="RSVP" />
      <RSVPStyles>
        <H1 title="RSVP" />
        <p>
          We aren't quite ready for you to RSVP yet, please check back after you have received your formal invitation.
        </p>
      </RSVPStyles>
    </>
  );
}
