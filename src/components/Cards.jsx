import React from 'react';
import PropTypes from 'prop-types'; 

function Cards(props) {
    return (
        <div className='container'>
            <div className='newspaper'>
                <h2 className='text'>{ props.title }</h2>
                <h2 className='translate'>{ props.translated }</h2>
            </div>
            <div className='rightNo'>
                <button className='plus'>✓</button>
                <button className='minus'>✗</button>
            </div>
        </div>    
    )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired, 
    translated: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}


export default Cards