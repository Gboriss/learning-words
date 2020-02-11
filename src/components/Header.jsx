import React from 'react';

function Header(props) {
    let total = props.cards.length
    let completed = props.cards.filter(todo => todo.completed).length
    let notCompleted = total - completed

    return (
        <header className='sidebar' cards={ props.cards }>
            <h2 className='words'>words
                <div className='ui'>{ total }</div>
            </h2>
            <h2 className='learn'>learn
                <div className='ui'>{ completed }</div>
            </h2>
            <h2 className='know'> know
                <div className='ui'>{ notCompleted }</div>
            </h2>
        </header>
    )
}

// Header.propTypes = {
//     completed: PropTypes.bool.isRequired
// }

export default Header