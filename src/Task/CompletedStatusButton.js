import classnames from 'classnames/bind'
import styles from './TaskStyle.modules.scss';
import { connect } from 'react-redux'
import { handleClickCompletedStatus } from '../actions/taskProjects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnClickCompletedStatus: (taskId) => dispatch(handleClickCompletedStatus(taskId))
})

const completedStatusButtonComp = ({ taskId, dispatchOnClickCompletedStatus }) => {
  const onClickCompletedStatus = (event) => {
    dispatchOnClickCompletedStatus(event.target.value)
  }

    return (
      <button value={taskId} className={cx('task_completed_button',)} onClick={onClickCompletedStatus}>Done</button>
    )
  }

export const CompletedStatusButton = connect(null, mapDispatchToProps)(completedStatusButtonComp);