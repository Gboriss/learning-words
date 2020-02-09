import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'; 

import Header from './components/Header'
import Form from './components/Form'
import Cards from './components/Cards'
import todos from './todos'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: this.props.initialData
        }
    }

    handleStatusChange = (id) => {
        let cards = this.state.cards.map(card => {
            if (card.id === id) {
                card.completed = !card.completed
            }
            return card
        })
        this.setState({ cards })
    }
    
    render() {
        return (
            <main>
                <Header />
                <Form />
                
                <div className='cards'>
                    { this.state.cards.map(cards => 
                        <Cards
                            key={ cards.id } 
                            id={ cards.id }
                            title={ cards.title } 
                            translated={ cards.translation } 
                            completed={ cards.completed } 
                            onStatusChange={ this.handleStatusChange }
                        />) }
                </div> 
        
            </main>
        )  
    }
}

export default App

ReactDOM.render(<App initialData={ todos } />, document.getElementById('root'))