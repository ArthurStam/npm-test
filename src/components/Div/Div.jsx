import React from 'react';
import PropTypes from 'prop-types';

Div.propTypes = {
    mode: PropTypes.string
}

function Div({ children, mode, ...restProps }) {
    return (
        <div {...restProps}>{children}</div>
    )
}

export default Div;
