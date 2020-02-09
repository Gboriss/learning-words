import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'; 

import Header from './components/Header'
import Form from './components/Form'
import Cards from './components/Cards'
import todos from './todos'

function App(props) {
    return (
        <main>
            <Header />
            <Form />
            
            <div className='cards'>
                { props.todos.map(cards => 
                    <Cards
                    key={ cards.id } 
                    title={ cards.title } 
                    translated={ cards.translation } 
                    completed={ cards.completed } 
                    />) }
            </div> 

        </main>
    )
}


//  

// App.defaultProps = {
//     title: 'word'
// }


export default App

ReactDOM.render(<App todos={ todos } />, document.getElementById('root'))