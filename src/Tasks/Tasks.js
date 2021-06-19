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
import { fetchGetState } from '../actions/taskProjects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasksById: state.taskProjects.tasksById,
  projectsById: state.taskProjects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme)),
  dispatchFetchStateLoad: (projects) => dispatch(fetchGetState(projects))
})

class TaskComponents extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchStateLoad()
  }

  onThemeChange = (event) => {
    this.props.dispatchOnThemeChange(event.target.value)
  }

  render() {
    return (
      <BrowserRouter>
      <div className={cx('container', `container-theme-${this.props.theme}`)}>
        <div className={cx('radio', `radio-theme-${this.props.theme}`)}>
          <div>
            <input type='radio' name='theme' id='light' value='light' checked={this.props.theme === 'light'}
              onChange={this.onThemeChange} 
            />
            <label htmlFor='light'>Light</label>
          </div>
          <div>
          <input type='radio' name='theme' id='dark' value='dark' checked={this.props.theme === 'dark'}
           onChange={this.onThemeChange}
            />
            <label htmlFor='light'>Dark</label>
          </div>
        </div>
        <div className={cx('all')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1 className={cx('header', `header-theme-${this.props.theme}`)}>
                <Link to='/'>Tasks</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${this.props.theme}`)}>Projects</h1>
              <ProjectsList projectsById={this.props.projectsById} />
              <AddProject />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header', `header-theme-${this.props.theme}`)}>Tasks</h1>
                <div className={cx('input')}>
                  <InputTask projectId={'no_project'} />
                </div>
                <TasksList projectId={'no_project'} tasksById={this.props.tasksById} />
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
}

export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(TaskComponents);


// здесь все было вперемешку, поэтому решила разнести это по разным компонентам
