import classnames from 'classnames/bind'
import styles from './inputTaskStyle.modules.scss'
import { connect } from 'react-redux'
import { handleClickAddTask } from '../actions/taskProjects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnClickTaskAdd: (projectId) => dispatch(handleClickAddTask(projectId))
})

const addTaskButtonComp = ({ dispatchOnClickTaskAdd, projectId }) => {
  const onClickAddTask = (event) => {
    dispatchOnClickTaskAdd(event.target.value)
  }

  return (
    <button value={projectId} className={cx('task_add_button')} onClick={onClickAddTask}>Add Task</button>
  )
}

export const AddTaskButton = connect(null, mapDispatchToProps)(addTaskButtonComp);