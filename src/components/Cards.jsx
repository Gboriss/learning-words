import React from 'react';
import PropTypes from 'prop-types'; 
import Button from './Button'
import Check from './Check'

function Cards(props) {

    return (

        <div className='container'>
            <div className='newspaper' checked={ props.checked } 
                onClick={ () => props.onStatusChange(props.id) }>
                {props.checked
                    ? <h2 className='text'>{ props.title }</h2> 
                    : <h2 className='translate'>{ props.translated }</h2>
                } 
            </div>
            <div className='rightNo'>
                <Check className='buttons' icon={ '✓' } />
                <Check className='buttons' icon={ '✗' } 
                    onClick={ () => props.onDelete(props.id) } />
            </div>
        </div>    
    ) 
}

// class Cards extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             checked: false
//         }
//     }

//     handleClick = (event) => {
//         // console.log(event)
//         this.setState({
//             checked : !this.state.checked
//         })
//         console.log(this.state.checked)
//     }

//     render() {
//         return (
//             <div className='container'>
//                 <div className='newspaper' onClick={ this.handleClick }>
//                     {this.state.checked
//                         ? <h2 className='translate'>{ this.props.translated }</h2>
//                         : <h2 className='text'>{ this.props.title }</h2>  
//                     } 
//                 </div>
//                 <div className='rightNo'>
//                     <Check className='buttons' icon={ '✓' } />
//                     <Check className='buttons' icon={ '✗' } />
//                 </div>
//             </div>    
//         )
//     } 
// }



// Cards.propTypes = {
//     title: PropTypes.string.isRequired, 
//     translated: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     checked: PropTypes.bool.isRequired
// }

export default Cards