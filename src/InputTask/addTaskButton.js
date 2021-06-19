import classnames from 'classnames/bind'
import styles from './inputTaskStyle.modules.scss'
import { connect } from 'react-redux'
import { fetchPostAddTaskClick } from '../actions/taskProjects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchPostAddTaskClick: (projectId) => dispatch(fetchPostAddTaskClick(projectId))
})

const addTaskButtonComp = ({ dispatchOnFetchPostAddTaskClick, projectId }) => {
  const onFetchPostAddTaskClick = (event) => {
    dispatchOnFetchPostAddTaskClick(event.target.value)
  }

  return (
    <button value={projectId} className={cx('inputButton')}
     onClick={onFetchPostAddTaskClick}>Add Task</button>
  )
}

export const AddTaskButton = connect(null, mapDispatchToProps)(addTaskButtonComp);