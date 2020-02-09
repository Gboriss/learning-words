import React from 'react';
import PropTypes from 'prop-types'; 

function Button(props) {
    return (
        <button className={ props.className }> { props.icon } </button>
    )
}

Button.PropTypes = {
    className: PropTypes.string,
    icon: PropTypes.string
}

export default Button