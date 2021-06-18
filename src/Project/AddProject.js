import classnames from 'classnames/bind'
import React from 'react'
import styles from './AddProject.modules.scss'
import { handleInputChange } from '../actions/taskProjects'
import { connect } from 'react-redux'
import { AddProjectButton } from './addProjectButton'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projectName: state.taskProjects.projectName
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnInputChange: (input) => dispatch(handleInputChange(input))
})

const addProjectComp = ({ projectName, dispatchOnInputChange }) => {
  const onInputChange = (event) => {
      dispatchOnInputChange(event.target)
  }

  return (
      <div className={cx('addProj')}>
          <div>
              <input value={projectName} onChange={onInputChange} placeholder='Project name' name='projectName' />
          </div>
          <div>
              <AddProjectButton />
          </div>    
      </div>
  )
}

export const AddProject = connect(mapStateToProps, mapDispatchToProps)(addProjectComp);

