import React from 'react';
import styles from './../App.modules.scss';
import classnames from "classnames/bind"
import { BrowserRouter, Switch, Route, Link, Redirect, useParams, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { handleThemeChange } from '../actions/theme'
import ProjectsList from '../Project/ProjectsList'
import { AddProject } from '../Project/AddProject'
import { InputTask } from '../InputTask/inputTask'
import TasksList from '../Task/TasksList'
import { ProjectTasks } from '../Project/ProjectTasks'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasksById: state.taskProjects.tasksById,
  projectsById: state.taskProjects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const tasksComponents = ({ tasksById, projectsById, theme, dispatchOnThemeChange }) => {
  const onThemeChange = (event) => {
    dispatchOnThemeChange(event.target.value)
  }

  return (
    <BrowserRouter>
      <div className={cx('page', `page-theme-${theme}`)}>
        <div className={cx('radios', `radios-theme-${theme}`)}>
          <div>
            <input type='radio' name='theme' id='light' value='light' checked={theme === 'light'}
              onChange={onThemeChange} />
            <label htmlFor='light'>Light</label>
          </div>
          <div>
          <input type='radio' name='theme' id='dark' value='dark' checked={theme === 'dark'}
           onChange={onThemeChange} />
            <label htmlFor='light'>Dark</label>
          </div>
        </div>
        <div className={cx('projects_and_tasks')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1>
                <Link className={cx('header', `header-theme-${theme}`)} to='/'>Tasks</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${theme}`)}>Projects</h1>
              <ProjectsList projectsById={projectsById} />
              <AddProject />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header_tasks', `header_tasks-theme-${theme}`)}>Tasks</h1>
                <div className={cx('new_task')}>
                  <InputTask projectId={'no_project'} />
                </div>
                <TasksList tasksById={tasksById} />
              </div>
            </Route>
            <Route path='/projects/:projectId/'>
              <ProjectTasks />
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(tasksComponents);

// здесь все было вперемешку, поэтому решила разнести это по разным компонентам

// const normalizeState = () => {

//   const normalizeBy = key => {
//     return (data, item) => {
//       data[item[key]] = item
//       return data
//     }
//   }

//   const normTasks = 
//     projects.map(project => 
//       project.tasks).flat().reduce(normalizeBy('id'),
//       {})
  
//   const normProject = projects.map(project => 
//     ({
//     ...project,
//     tasksIds: project.tasks.map(task => task.id)
//   })).reduce(normalizeBy('id'), 
//   {})

//   const normState = {
//     projectsById: normProject,
//     tasksById: normTasks,
//     name: '',
//     description: '',
//     project_name: '',
//     theme: DEFAULT_THEME
//   }

//   return normState
// }


// const ProjectsList = ({ projectsById, addNewProject }) => {
//   const projects = Object.values(projectsById)
//   return (
//       <div>
//           {
//               projects.map(project => <Project key={project.id} id={project.id}
//                 name={project.name} onChange={addNewProject} />)
//           }
//       </div>
//   )
// }

// const TaskList = ({ tasksById, handleClickStatus }) => {
//   const tasks = Object.values(tasksById)
//   return (
//     <div className={cx('tasks')}>
//       {
//         tasks.map(it => <Task id={it.id} name={it.name} description={it.description} 
//           completed={it.completed} onClick={() => handleClickStatus(it.id)} key={it.id} />)
//       }
//     </div>
//   )
// }

// // const AddTask = ({addNewTask, taskName, taskDesc, projectId, handleChange}) => {
// //   return (
// //     <div className={cx("container")}>
// //       <Input placeholder='Enter task name' value={taskName} onChange={handleChange} name="taskName" />
// //       <Input placeholder='Enter task description' value={taskDesc} onChange={handleChange} name="taskDesc" />
// //       <button value={projectId} onClick={addNewTask}>ADD TASK</button>
// //     </div>
// //   )
// // }

// const ProjectTasks = ({ projectsById, tasksById, handleClickStatus, handleChange, addNewTask, taskName, taskDesc}) => {
//   const normalizeBy = key => {
//     return (data, item) => {
//       data[item[key]] = item
//       return data
//     }
//   }

//   const { projectId } = useParams()
//   if (projectId in projectsById) {
//       const pName = projectsById[projectId].name
//       const { tasksIds } = projectsById[projectId]
//       const pTasks = (tasksIds.map(t => tasksById[t])).reduce(normalizeBy("id"), 
//       {})
//       // const pTaskIds = projectsById[projectId].tasksIds.map(id => String(id))
//       // const pTasks = Object.keys(tasksById).filter(key => pTaskIds.includes(key)).reduce((obj, key) => 
//       // {
//       //   return {
//       //       ...obj,
//       //       [key]: tasksById[key]
//       //   }
//       // }, {})

//     return (
//       <div>
//       <div className={cx('project')}>
//         <h1>{pName}</h1>
//         <TaskList tasksById={pTasks}/>
//       </div>
//       <div>
//       <AddTask taskName={taskName} taskDesc={taskDesc} handleChange={handleChange}
//              addNewTask={addNewTask} projectId={projectId}/>
//       <TaskList tasksById={pTasks} handleClickStatus={handleClickStatus} />
//       </div>
//       </div>
//     )
//   } else {
//       return (
//         <Redirect to='/' />
//       )
//   }
// }

// class MyTodoList extends React.Component {
//   state = normalizeState(projects)

//   handleClickStatus = (id) => {
//     const prevTask = this.state.tasksById[id]
//     const newTask = {...prevTask, completed: !prevTask.completed}
//     this.setState(curState => ({
//       tasksById: {
//         ...curState.tasksById, [id]: newTask
//       }
//     }
//     ))
//   }

//   addNewProject = (name) => {
//     const newProjectId = Object.keys(this.state.projectsById).length + 1
//     const newProject = {
//       id: newProjectId,
//       name: name,
//       tasksIds: []
//     }

//     this.setState(state => {
//       const newProjectsById = {...state.projectsById}
//       newProjectsById[newProjectId] = newProject

//       return {
//         projectsById: newProjectsById
//       }
//     }
//     )
//   }

//   addNewTask = (event) => {
//     const { value: projectId } = event.currentTarget
//     const nId = Object.keys(this.state.tasksById).length + 1
//     const nTask = {
//       id: nId,
//       name: this.state.taskName,
//       description: this.state.taskDesc,
//       completed: false
//     }

//     this.setState(currentState => {
//       const nTasksById = {...currentState.tasksById}
//       nTasksById[nId] = nTask
//       const nProjectsById = {...currentState.projectsById}
//       nProjectsById[projectId] = {...nProjectsById[projectId]}
//       nProjectsById[projectId].tasksIds = [...nProjectsById[projectId].tasksIds, nId]

//       return {
//         tasksById: nTasksById,
//         projectsById: nProjectsById
//       }
//   })
//   }


//   handleChange = (event) => {
//     const { value, name } = event.currentTarget

//     this.setState({ [name]: value })
//   }

//   render() {
//     return (
//       <BrowserRouter>
//       <div>
//       <Route path='/'>
//         <div className={cx('project')}>
//           <h1>
//             <Link to='/'>Список задач</Link>
//           </h1>
//           <h1>Список проектов</h1>
//           <div class={cx("project")}>
//           <ProjectsList projectsById={this.state.projectsById} />
//           <AddProject projectName={this.state.projectName} handleChange={this.handleChange}
//            AddNewProject={this.AddNewProject}/>
//         </div>
//         </div>
//       </Route>
//       <Switch>
//         <Route exact path='/'>
//           <div className={cx('tasks')}>
//             <h1>Список задач</h1>
//             <AddTask taskName={this.state.taskName} taskDesc={this.state.taskDesc} handleChange={this.handleChange}
//              addNewTask={this.addNewTask} projectId={this.state.projectId}/>
//             <TaskList tasksById={this.state.tasksById} handleClickStatus={this.handleClickStatus} />
//           </div>
//         </Route>
//         <Route path='/projects/:projectId/'>
//           <div className={cx('tasks')}> 
//             <ProjectTasks projectsById={this.state.projectsById} tasksById={this.state.tasksById} 
//             handleClickStatus={this.handleClickStatus} handleChange={this.handleChange}
//             addNewTask={this.addNewTask} taskName={this.state.taskName} taskDesc={this.state.taskDesc}/>
//           </div>
//         </Route>
//         <Redirect to='/' />
//         </Switch>
//       </div>
//       </BrowserRouter>
//     )
//   }
// }

// export default MyTodoList;