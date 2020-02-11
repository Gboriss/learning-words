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
    
    // nextId() {
    //     this._nextId = this._nextId || 6
    //     return this._nextId++
    // }

    handleStatusChange = (id) => {
        let cards = this.state.cards.map(card => {
            if (card.id === id) {
                card.checked = !card.checked
            }
            return card
        })
        this.setState({ cards })
    }

    handleAdd = (title, translation) => {
        let card = {
            id: this.state.cards.length + 1,
            title,
            translation,
            completed: false,
            checked: true,
            learn: false
        }
        let cards = [...this.state.cards, card]

        this.setState({ cards })
    }

    handleDelete = (id) => {
        let cards = this.state.cards.filter(card => card.id !== id)

        this.setState({ cards })
    }

    // handleDone = (id) => {
    //     let cards = this.state.cards.filter(card => {
    //         if (card.id === id) {
    //             card.learn = !card.learn
    //         }
    //         return card
    //     })
    //     this.setState({ cards })
    // }
    
    render() {
        return (
            <main>
                <Header cards={ this.state.cards } />
                <Form onAdd={ this.handleAdd}/>
                
                <div className='cards'>
                    { this.state.cards.map(cards => 
                        <Cards
                            key={ cards.id } 
                            id={ cards.id }
                            title={ cards.title } 
                            translated={ cards.translation } 
                            completed={ cards.completed } 
                            checked={ cards.checked }
                            learn={ cards.learn }
                            onStatusChange={ this.handleStatusChange }
                            onDelete={ this.handleDelete }
                            done={ this.handleDone }

                        />) }
                </div> 
        
            </main>
        )  
    }
}

export default App

ReactDOM.render(<App initialData={ todos } />, document.getElementById('root'))