import React from 'react';
import './inputTaskStyle.css';

const Input = (props) => {
    return <input value={props.value} onChange={props.onChange} name={props.name} />
}

class AddTask extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        const {value, name} = event.currentTarget
        this.setState({[name]: value})
    }

    handleClick = (props) => {
        this.props.addNewTask(this.state.name, this.state.description)
    }
    render() {
        console.log(this.state)

        return (
            <div className='inputBox'>
                <Input value={this.state.name} onChange={this.handleChange} name="name" />
                <Input value={this.state.description} onChange={this.handleChange} name="description" />
                <button onClick={this.handleClick} className='inputButton'>OK</button>
            </div>
        )
    }
}

export default AddTask;
