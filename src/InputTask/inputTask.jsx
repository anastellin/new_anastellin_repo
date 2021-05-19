import React, { Children } from 'react';
import styles from './inputTaskStyle.modules.scss';
import classnames from "classnames/bind"
import { ThemeContext } from "../ThemeContext"
import Input from "../InputBox/Input"

const cx = classnames.bind(styles)

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
            <div className={cx("inputBox")}>
                <Input placeholder='Task name' value={this.state.name} onChange={this.handleChange} name="name" />
                <Input placeholder='Description' value={this.state.description} onChange={this.handleChange} name="description" />
                <button onClick={this.handleClick} className={cx("inputButton")}>OK</button>
            </div>
        )
    }
}

export default AddTask;
