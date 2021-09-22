import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const Card = ({ title, desc, url, buttonLabel }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{desc}</p>
        <a href={url} className="button">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  buttonLabel: PropTypes.string,
};
