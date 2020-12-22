import React from 'react';
import styled from 'styled-components';
import { FaDirections } from 'react-icons/fa';
import H1 from '../components/H1';
import '../styles/hexGrid.scss';
import SEO from '../components/SEO';

const ItemStyles = styled.div`
  margin-top: 5rem;
  h2 {
    text-align: center;
    color: var(--rust);
    font-size: clamp(3.5rem, 6vw, 5rem);
    font-family: HeadingCursive;
    margin-bottom: 1rem;
    span {
      @media (max-width: 799px) {
        display: block;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr;
  }
  li {
    display: grid;
    grid-template-columns: 0 1fr;
    grid-gap: 1.75em;
    align-items: center;
    font-size: 2rem;
    margin-left: 0;
    @media (min-width: 840px) {
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
    max-width: 200px;
    font-family: 'HeadingReg';
    text-align: left;
    font-size: clamp(1.6rem, 1.5vw, 2rem);
    font-weight: 400;
    display: block;
    color: var(--black);
    margin: 1rem 0;
    @media screen and (min-width: 840px) {
      max-width: 250px;
    }
  }
  .directions {
    display: grid;
    grid-template-columns: 175px 1fr;
    align-items: center;
    @media screen and (min-width: 840px) {
      grid-template-columns: 200px 30px;
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: 250px 60px;
    }
    a {
      max-width: 5rem;
      svg {
        font-size: 3rem;
        color: var(--rust);
        transition: color 0.25s ease-in-out;
        @media screen and (min-width: 1000px) {
          font-size: 5rem;
        }
      }
      &:hover,
      &:focus,
      &:active {
        svg {
          color: var(--pale-green);
        }
      }
    }
  }
`;

export default function Details() {
  return (
    <>
      <SEO title="Details" />
      <H1 title="Details" />
      <div className="details">
        <ul className="details__list">
          <li className="item">
            <ItemStyles className="item__content">
              <h2>When</h2>
              <ul>
                <li>
                  <p>September 5, 2021</p>
                </li>
                <li>
                  <p>Arrival at 5:00pm</p>
                </li>
                <li>
                  <p>Outdoor Ceremony at 5:30pm</p>
                </li>
                <li>
                  <p>Outdoor Reception to Follow On-site</p>
                </li>
              </ul>
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
              <h2>Where</h2>
              <ul>
                <li>
                  <div className="directions">
                    <p>
                      Scholl's Valley Lodge
                      <br />
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
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
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
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
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
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
              <h2>
                <span>Food</span> <span>&</span> <span>Drink</span>
              </h2>
              <ul>
                <li>
                  <p>Appetizers followed by Light Meal</p>
                </li>
                <li>
                  <p>Beer and wine bar along with NA beverages</p>
                </li>
              </ul>
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
              <h2>Children</h2>
              <ul>
                <li>
                  <p>
                    To allow all wedding guests, including parents, a night of relaxation and partying, we have chosen
                    to make our special day 21+ only
                  </p>
                </li>
              </ul>
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
              <h2>Registry</h2>
              <ul>
                <li>
                  <p>Check Back Once You have Received your formal invitation</p>
                </li>
              </ul>
            </ItemStyles>
          </li>
          <li className="item">
            <ItemStyles className="item__content">
              <h2>
                <span>Unplugged</span> <span>Ceremony</span>
              </h2>
              <ul>
                <li>
                  <p>
                    We invite you to be fully present. Kindly turn off all devices and enjoy this special moment with us
                  </p>
                </li>
              </ul>
            </ItemStyles>
          </li>
        </ul>
      </div>
    </>
  );
}
