import './App.css';
import React from "react";

const Tasks = (props) => {
  const handleClick = () => {
    return (
      console.log('Task' + props.id + ' completed status = ' + props.completed)
    )
  }
  return (
    <div class="tasks">
      <div class="name">Name of task: {props.name}</div>
      <div>Description: {props.description}</div>
      <div>Completed: {String(props.completed)}</div>
      <button onClick={handleClick} className="button">BTN</button>
    </div>
  )
}

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
  render() {
    return (
      <div class="App">
        {this.state.tasks.map(it => <Tasks id={it.id} name={it.name} description={it.description} completed={it.completed} />)}
      </div>
    )
}
}
function App() {
  return (
    <div>
      <MyTodoList />
    </div>
  );
}
export default App;
