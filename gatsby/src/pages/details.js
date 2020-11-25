import React from 'react';
import H1 from '../components/H1';

export default function Details() {
  return (
    <div>
      <H1 title="Details" />
      <div className="details">
        <div className="details__item">
          <h2>When</h2>
          <p>September 5, 2021</p>
          <p>Arrival at 5:00 PM</p>
          <p>Outdoor Ceremony at 5:30 PM</p>
          <p>Outdoor Reception to Follow On-site</p>
        </div>
        <div className="details__item">
          <h2>Where</h2>
          <p>Scholl's Valley Lodge</p>
          <p>2840 SW River Road Hillsboro, OR 97123</p>
          <p>About 45 minute drive from Portland</p>
          <p>Parking is limited, please carpool if possible</p>
        </div>
        <div className="details__item">
          <h2>Accessibility</h2>
          <p>Gravel Parking Lot</p>
          <p>Ceremony and Reception Site are accessible without stairs</p>
          <p>Ceremony will be held on a lawn, beware of heels</p>
        </div>
        <div className="details__item">
          <h2>Registry</h2>
          <p>We invite you to be fully present. Kindly turn off all devices and enjoy this special moment with us</p>
        </div>
        <div className="details__item">
          <h2>Info</h2>
          <div className="subHeading">Attire</div>
          <p>Semi-Formal</p>
          <p>Light Coat Recommended in the event of wind</p>
          <p>Ceremony will be held on a lawn, beware of heels</p>
        </div>
        <div className="details__item">
          <div className="subHeading">Food and Drink</div>
          <p>Appetizers followed by Light Meal</p>
          <p>Curated Beer and wine bar along with non-alcoholic beverages</p>
          <p>Survey to determine dietary restriction needs will be included in formal invitation</p>
        </div>
        <div className="details__item">
          <div className="subHeading">Children</div>
          <p>
            To allow all wedding guests, including parents, a night of relaxation and partying, we have chosen to make
            our special day 21+ only
          </p>
        </div>
        <div className="details__item">
          <div className="subHeading">Unplugged Ceremony</div>
          <p>We invite you to be fully present. Kindly turn off all devices and enjoy this special moment with us</p>
        </div>
      </div>
    </div>
  );
}
