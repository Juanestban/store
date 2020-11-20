import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './stars.css';


const qualityStars = ["", "", "", "", ""];

export const Stars = ({colorStar = 'colorStarStandar'}) => {
  return (
    <div className="contentStar">
      <div className={`star ${colorStar}`}></div>
    </div>
  );
};

export const ListStars = ({quality}) => {
  return (
    <div className="row pb-3">
      {qualityStars.map((cantidad, index) => (
        <Stars
          key={index}
          colorStar={index <= (quality - 1)
            ? 'colorStarPrimary'
            : 'colorStarStandar'
          }
        />
      ))}
    </div>
  );
}
