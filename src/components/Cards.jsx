import React from 'react';
import PropTypes from 'prop-types'; 
import Button from './Button'

class Cards extends React.Component {
    constructor() {
        super()

        this.state = {
            checked: false
        }
    }

    handleClick = (event) => {
        console.log(event)
        this.setState({
            checked : !this.state.checked
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='newspaper' onClick={ this.handleClick }>
                    {this.state.checked
                        ? <h2 className='translate'>{ this.props.translated }</h2>
                        : <h2 className='text'>{ this.props.title }</h2>
                        
                    } 
                </div>
                <div className='rightNo'>
                    <Button className='buttons' icon={ '✓' }/>
                    <Button className='buttons' icon={ '✗' }/>
                </div>
            </div>    
        )
    } 
}

Cards.propTypes = {
    title: PropTypes.string.isRequired, 
    translated: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

// let dropbtn = document.querySelector(".dropbtn")
// let dropdowns = document.querySelector(".dropdown-content")

// dropbtn.addEventListener('click', () => dropdowns.classList.toggle("show"))

// window.onclick = function(event) {
// 	if (!event.target.matches('.dropbtn')) {
// 	  let dropdowns = document.getElementsByClassName("dropdown-content");
// 	  for (let i = 0; i < dropdowns.length; i++) {
// 		let openDropdown = dropdowns[i];
// 		if (openDropdown.classList.contains('show')) {
// 		  openDropdown.classList.remove('show');
// 		}
// 	  }
// 	}
//   }

export default Cards