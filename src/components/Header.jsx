import React from 'react';

function Header(props) {
    return (
        <header className='sidebar'>
            <h2 className='words'>words
                <div className='ui'>4</div>
            </h2>
            <h2 className='learn'>learn
                <div className='ui'>8</div>
            </h2>
            <h2 className='know'> know
                <div className='ui'>10</div>
            </h2>
        </header>
    )
}

// Header.propTypes = {
//     completed: PropTypes.bool.isRequired
// }

export default Header