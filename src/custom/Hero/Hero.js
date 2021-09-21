import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

export default function Hero({ children, imageSrc }) {
  return (
    <div>
      <div id="gradient">
        <div id="hero" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      </div>
      <div id="content">{children}</div>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  imageSrc: PropTypes.string.isRequired,
};
