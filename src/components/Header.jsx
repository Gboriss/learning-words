import React from 'react';

function Header(props) {
    let total = props.cards.length
    let done = props.cards.filter(todo => todo.learn).length
    let notDone = total - done

    return (
        <header className='sidebar' cards={ props.cards }>
            <h2 className='words'>words
                <div className='ui'>{ total }</div>
            </h2>
            <h2 className='learn'>learn
                <div className='ui'>{ done }</div>
            </h2>
            <h2 className='know'> know
                <div className='ui'>{ notDone }</div>
            </h2>
        </header>
    )
}

// Header.propTypes = {
//     completed: PropTypes.bool.isRequired
// }

export default Header