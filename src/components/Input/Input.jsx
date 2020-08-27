import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    mode: PropTypes.string,
    status: PropTypes.string,
}

function Input({ children, mode, ...restProps }) {
    return (
        <button {...restProps}>{children}</button>
    )
}

export default Input;
