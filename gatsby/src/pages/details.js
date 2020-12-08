import React from 'react';
import styled from 'styled-components';
import { FaDirections } from 'react-icons/fa';
import H1 from '../components/H1';

const DetailsStyles = styled.div`
  margin-top: 5rem;
  .details {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    justify-content: center;
    gap: 5rem;
    margin: 0 1.5rem;
    @media (min-width: 800px) {
      margin: 0 10rem;
    }
    &__item {
      background: linear-gradient(var(--pink-alpha) 40%, var(--pale-green-alpha));
      padding: 2rem 2rem 0 2rem;
      border-radius: 1rem;
    }
  }
  h2 {
    text-align: center;
    color: var(--rust);
    font-size: clamp(4rem, 2.5vw, 5rem);
    font-family: HeadingCursive;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: 0;
  }
  li {
    display: grid;
    grid-template-columns: 0 1fr;
    grid-gap: 1.75em;
    align-items: center;
    font-size: 2rem;
    margin-left: 0;
    @media (min-width: 800px) {
      margin-left: 2rem;
    }
    &::before {
      content: '&';
      font-size: 2.25em;
      font-family: HeadingCursive;
      color: var(--green);
    }
  }
  p {
    font-family: 'BodyLight';
    text-align: left;
    font-size: clamp(2rem, 1.2vw, 2.5rem);
    font-weight: 400;
    display: block;
    color: var(--black);
  }
  .directions {
    display: grid;
    grid-template-columns: 250px 60px;
    align-items: center;
    a {
      max-width: 5rem;
      font-size: 5rem;
      svg {
        color: var(--black);
        transition: color 0.25s ease-in-out;
      }
      &:hover,
      &:focus,
      &:active {
        svg {
          color: var(--rust);
        }
      }
    }
  }
`;

export default function Details() {
  return (
    <>
      <H1 title="Details" />
      <DetailsStyles>
        <div className="details">
          <div className="details__item">
            <h2>When</h2>
            <ul>
              <li>
                <p>September 5, 2021</p>
              </li>
              <li>
                <p>Arrival at 5:00 PM</p>
              </li>
              <li>
                <p>Outdoor Ceremony at 5:30 PM</p>
              </li>
              <li>
                <p>Outdoor Reception to Follow On-site</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Where</h2>
            <ul>
              <li>
                <p>Scholl's Valley Lodge</p>
              </li>
              <li>
                <div className="directions">
                  <p>
                    2840 SW River Road
                    <br />
                    Hillsboro, OR 97123
                  </p>
                  <a href="https://goo.gl/maps/tyM7HbV1gnzTE8aC6" rel="noreferrer" target="_blank">
                    <FaDirections />
                  </a>
                </div>
              </li>
              <li>
                <p>About 45 minute drive from Portland</p>
              </li>
              <li>
                <p>Parking is limited, please carpool if possible</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Accessibility</h2>
            <ul>
              <li>
                <p>Gravel Parking Lot</p>
              </li>
              <li>
                <p>Ceremony and Reception Site are accessible without stairs</p>
              </li>
              <li>
                <p>Ceremony will be held on a lawn, beware of heels</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Attire</h2>
            <ul>
              <li>
                <p>Semi-Formal</p>
              </li>
              <li>
                <p>Light Coat Recommended due to the possibility of wind</p>
              </li>
              <li>
                <p>Ceremony will be held on a lawn, beware of heels</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Food and Drink</h2>
            <ul>
              <li>
                <p>Appetizers followed by Light Meal</p>
              </li>
              <li>
                <p>Curated Beer and wine bar along with non-alcoholic beverages</p>
              </li>
              <li>
                <p>Survey to determine dietary restriction needs will be included in formal invitation</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Children</h2>
            <ul>
              <li>
                <p>
                  To allow all wedding guests, including parents, a night of relaxation and partying, we have chosen to
                  make our special day 21+ only
                </p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Registry</h2>
            <ul>
              <li>
                <p>Check Back Once You have Received your formal invitation</p>
              </li>
            </ul>
          </div>
          <div className="details__item">
            <h2>Unplugged Ceremony</h2>
            <ul>
              <li>
                <p>
                  We invite you to be fully present. Kindly turn off all devices and enjoy this special moment with us
                </p>
              </li>
            </ul>
          </div>
        </div>
      </DetailsStyles>
    </>
  );
}
