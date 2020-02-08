import React from 'react';

function Form(props) {
    return (
        <form className='form-group'>
            <input type='text' className='input-left' placeholder='Enter word'/>
            <input type='text' className='input-right' placeholder='Translate'/>
            <button type='button' className='buttonForm'>✔</button>
        </form>
    )
}

export default Form