import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, styles }) => {
  const classNames = `btn ${styles}`;
  return <button className={classNames}>{text}</button>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
