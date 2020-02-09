import React from 'react';

function Check(props) {
    return (
        <button className={ props.className }> { props.icon } </button>
    )
}

export default Check