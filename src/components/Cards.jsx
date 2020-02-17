import React from 'react';
import Check from './Check'

class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        {this.props.checked
        ? this.props.onEdit(this.props.id, this.refs.title.value)
        : this.props.onEditTranslated(this.props.id, this.refs.translated.value)}
     
        // let title = this.refs.title.value
        // let translated = this.refs.translated.value

        // this.props.onEdit(this.props.id, title)
        // this.props.onEditTranslated(this.props.id, translated)
        this.setState({ editing: false })
    }


    render() {
        return (this.state.editing ?
            <form className='edit-form' onSubmit={ this.handleSubmit }>
                {this.props.checked
                    ? <input type='text' ref='title' defaultValue={ this.props.title } />
                    : <input type='text' ref='translated' defaultValue={ this.props.translated } />
                }
                <Check className='edit' icon={ '☑' } type='submit' />
            </form>
            :
            <div className='container'>
                <div className='newspaper' checked={ this.props.checked } 
                    onClick={ () => this.props.onStatusChange(this.props.id) }>
                    {this.props.checked
                        ? <h2 className='text'>{ this.props.title }</h2> 
                        : <h2 className='translate'>{ this.props.translated }</h2>
                    } 
                </div>
                <div className='rightNo'>
                    <Check className='delete' icon={ '✖' } 
                        onClick={ () => this.props.onDelete(this.props.id) }/>
                    <Check className='edit' icon={ '✎' } 
                        onClick={() => this.setState({ editing: true })}/>
                    <Check className='buttons' icon={ '✓' } 
                        onClick={ () => this.props.done(this.props.id) }/>
                    <Check className='buttons' icon={ '✗' } />
                </div>
                
            </div>    
        ) 

    }
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