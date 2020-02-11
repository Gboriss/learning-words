import React from 'react';

function Check(props) {
    return (
        <button className={ props.className } onClick={ props.onClick }> { props.icon } </button>
    )
}

export default Check