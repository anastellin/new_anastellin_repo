import React from 'react';
import styles from './../App.modules.scss';
import AddTask from '../InputTask/inputTask';
import classnames from "classnames/bind"
import Project from "../Project/Project"
import Task from "../Task/Task"
import { DEFAULT_THEME, ThemeContext } from '../ThemeContext'
import { BrowserRouter, Switch, Route, Link, Redirect, useParams, withRouter } from "react-router-dom"

const cx = classnames.bind(styles)

const projects = [
  {
    id: 1,
    name: 'HomeTasks',
    tasks: [
      {id: 1, name: "Task1", description: "This is the first task", completed: true},
      {id: 2, name: "Task2", description: "This is the second task", completed: true},
      {id: 3, name: "Task3", description: "This is the third task", completed: false}
    ]
    },
    {
      id: 2,
      name: 'UniverTasks',
      tasks: [
        {id: 4, name: "Task4", description: "This is the fourth task", completed: false},
        {id: 5, name: "Task5", description: "This is the fifth task", completed: false},
        {id: 6, name: "Task6", description: "This is the sixth task", completed: true},
        {id: 7, name: "Task7", description: "This is the seventh task", completed: true}
      ]
    }
]

const normalizeState = (proj) => {

  const normalizeBy = (key) => {
    return (data, item) => {
      data[item[key]] = item
      return data
    }
  }

  const normTasks = 
    projects.map(project => 
      project.tasks).flat().reduce(normalizeBy('id'),
      {})
  
  const normProject = projects.map(project => 
    ({
    ...project,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce(normalizeBy('id'), 
  {})

  const normState = {
    projectsById: normProject,
    tasksById: normTasks,
    name: '',
    description: '',
    project_name: '',
    theme: DEFAULT_THEME
  }

  return normState
}

const ProjectsList = ({ projectsById }) => {
  const projects = Object.values(projectsById)
  return (
      <div>
          {
              projects.map(project => <Project id={project.id} name={project.name} key={project.id} />)
          }
      </div>
  )
}

const TaskList = ({ tasksById, handleClick }) => {
  const tasks = Object.values(tasksById)
  return (
    <div className={cx('tasks')}>
      {
        tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} key={it.id} />)
      }
    </div>
  )
}

const ProjectTasks = ({ projectsById, tasksById}) => {
  const { projectId } = useParams()
  if (projectId in projectsById) {
      const pName = projectsById[projectId].name
      const pTaskIds = projectsById[projectId].tasksIds.map(id => String(id))
      const pTasks = Object.keys(tasksById).filter(key => pTaskIds.includes(key)).reduce((obj, key) => 
      {
        return {
            ...obj,
            [key]: tasksById[key]
        }
      }, {})

    return (
      <div className={cx('project')}>
        <h1>{pName}</h1>
        <TaskList tasksById={pTasks}/>
      </div>
    )
  } else {
      return (
        <Redirect to='/' />
      )
  }
}

class MyTodoList extends React.Component {
  state = normalizeState(projects)
  
  handleClick = (id, completed) => {
    this.setState (currentState => {
      let i = [...currentState.tasksById].findIndex(a => a.id === id)
      currentState.tasksById[i] = {...currentState.tasksById[i], completed: !completed}
      return {
        tasksById: currentState.tasksById
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
      <BrowserRouter>
      <div>
      <AddTask addNewTask={this.addNewTask} />
      <Route path='/'>
        <div className={cx('project')}>
          <h1>
            <Link to='/'>Список задач</Link>
          </h1>
          <h1>Список проектов</h1>
          <div class={cx("project")}>
          <ProjectsList projectsById={this.state.projectsById} />
        </div>
        </div>
      </Route>
      <Switch>
        <Route exact path='/'>
          <div className={cx('tasks')}>
            <h1>Список задач</h1>
            <TaskList tasksById={this.state.tasksById} OncCick={this.handleClick} />
          </div>
        </Route>
        <Route path='/projects/:projectId/'>
          <div className={cx('tasks')}> 
            <ProjectTasks projectsById={this.state.projectsById} tasksById={this.state.tasksById} OncCick={this.handleClick} handleChange={this.handleChange}/>
          </div>
        </Route>
        <Redirect to='/' />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default MyTodoList;