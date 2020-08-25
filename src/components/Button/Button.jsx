import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  mode: PropTypes.string
}

function Button({ children, mode, ...restProps }) {
  return (
    <button {...restProps}>{children}</button>
  )
}

export default Button;
