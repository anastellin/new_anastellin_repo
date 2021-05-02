import React from 'react';
import Task from './../Task/Task';
import './../App.css';
import AddTask from './../InputTask/inputTask';

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {id: 1, name: "Task1", description: "This is the first task", completed: true},
      {id: 2, name: "Task2", description: "This is the second task", completed: true},
      {id: 3, name: "Task3", description: "This is the third task", completed: false},
      {id: 4, name: "Task4", description: "This is the fourth task", completed: false},
      {id: 5, name: "Task5", description: "This is the fifth task", completed: false},
      {id: 6, name: "Task6", description: "This is the sixth task", completed: true},
      {id: 7, name: "Task7", description: "This is the seventh task", completed: true}
    ]
  }

  handleClick = (id, completed) => {
    this.setState (currentState => {
      let i = [...currentState.tasks].findIndex(a => a.id === id)
      currentState.tasks[i] = {...currentState.tasks[i], completed: !completed}
      return {
        tasks: currentState.tasks
      }
    }
    )
  }

  addNewTask = (name, description) => {
    this.setState((currentState) => {
      const NewTask = {
        id: currentState.tasks.length + 1,
        name: name,
        description: description,
        completed: false
      }
      const newState = [NewTask, ...currentState.tasks]
      console.log(newState)
      return {
        tasks: newState
      }
    })
  }

  render() {
    return (
      <div>
        <AddTask addNewTask={this.addNewTask} />
        <div class="App">
          {this.state.tasks.map(it => <Task key={it.id} name={it.name} description={it.description} completed={it.completed} 
          onClick={() => this.handleClick(it.id, it.completed)} />)}
        </div>
      </div>
    )
  }
}

export default MyTodoList;