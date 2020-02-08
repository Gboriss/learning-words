import React from 'react';
import PropTypes from 'prop-types'; 
import Header from './components/Header'
import Form from './components/Form'
import Cards from './components/Cards'

function App(props) {
    return (
        <main>
            <Header />
            <Form />
            
            <div className='cards'>
                <Cards title={ 'Fox' } translated={ 'Лиса' } completed={ true }/>
                <Cards title={ 'Cat' } translated={ 'Кисюк' } completed={ false }/>
                <Cards title={ 'Winter' } translated={ 'Зима' } completed={ true }/>
            </div> 

        </main>
    )
}


// App.propTypes = {
//     title: PropTypes.string
// }

// App.defaultProps = {
//     title: 'word'
// }


export default App