import classnames from 'classnames/bind'
import styles from './inputTaskStyle.modules.scss'
import { connect } from 'react-redux'
import { handleInputChange } from '../actions/taskProjects'
import { AddTaskButton } from './addTaskButton'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  taskName: state.taskProjects.taskName,
  taskDescription: state.taskProjects.taskDescription,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnInputChange: (input) => dispatch(handleInputChange(input))
})

const inputTaskComp = ({ taskName, taskDescription, theme, dispatchOnInputChange, projectId }) => {
  const onInputChange = (event) => {
    dispatchOnInputChange(event.target)
  }

  return (
    <div className={cx('task_add')}>
      <div className={cx('inputs')}>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={taskName} onChange={onInputChange} placeholder='Task name' name='taskName' />
          </div>
          <div>
            <input className={cx('input', `input-theme-${theme}`)} value={taskDescription} onChange={onInputChange} placeholder='Task description' name='taskDescription' />
          </div>
        </div>
        <AddTaskButton projectId={projectId} />
    </div>
  )
}

export const InputTask = connect(mapStateToProps, mapDispatchToProps)(inputTaskComp);

