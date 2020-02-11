import React from 'react';
import Button from './Button'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            translation: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let title = this.state.title
        let translation = this.state.translation

        if (title && translation) {
            this.props.onAdd(title, translation)
            this.setState({ title: '' })
            this.setState({ translation: '' })
        }
    }

    handleChangeTitle = (event) => {
        let title = event.target.value
        this.setState({ title })
    }

    handleChangeTranslation = (event) => {
        let translation = event.target.value
        this.setState({ translation })
    }

    render() {
        return (
            <form className='form-group' onSubmit={ this.handleSubmit }>
                <input 
                    type='text' 
                    value={ this.state.title } 
                    className='input-left' 
                    placeholder='Enter word'
                    onChange={ this.handleChangeTitle } />
                <input 
                    type='text' 
                    value={ this.state.translation } 
                    className='input-right' 
                    placeholder='Translate'
                    onChange={ this.handleChangeTranslation } />
            
                <Button className='buttonForm' type='submit' icon={ '✔' }/>
            </form>
        )
    }
}

export default Form