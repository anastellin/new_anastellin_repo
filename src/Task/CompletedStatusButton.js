import classnames from 'classnames/bind'
import styles from './TaskStyle.modules.scss';
import { connect } from 'react-redux'
import { fetchPostTaskStatusClick } from '../actions/taskProjects'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnFetchPostTaskStatusClick: (taskID) => dispatch(fetchPostTaskStatusClick(taskID))
})

const completedStatusButtonComp = ({ taskID, dispatchOnFetchPostTaskStatusClick }) => {
  const onFetchPostTaskStatusClick = (event) => {
    dispatchOnFetchPostTaskStatusClick(event.target.value)
  }

    return (
      <button value={taskID} className={cx('button',)} onClick={onFetchPostTaskStatusClick}>Done</button>
    )
  }

export const CompletedStatusButton = connect(null, mapDispatchToProps)(completedStatusButtonComp);