import React from 'react';
import Button from './Button'

function Form(props) {
    return (
        <form className='form-group'>
            <input type='text' className='input-left' placeholder='Enter word'/>
            <input type='text' className='input-right' placeholder='Translate'/>
        
            <Button className='buttonForm' icon={ '✔' }/>
        </form>
    )
}

export default Form