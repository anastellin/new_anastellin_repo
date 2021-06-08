import classnames from 'classnames/bind'
import { connect } from 'react-redux'
import { handleClickAddProject } from '../actions/taskProjects'
import styles from './AddProject.modules.scss'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnClicktAddProject: (event) => dispatch(handleClickAddProject(event))
})

const addProjectButtonComp = ({ dispatchOnClicktAddProject }) => {
    const onClickAddProject = (event) => {
        dispatchOnClicktAddProject(event.target)
    }

    return (
        <div>
            <button className={cx('project_add_button')} onClick={onClickAddProject}>Add</button>
        </div>
    )
}

export const AddProjectButton = connect(null, mapDispatchToProps)(addProjectButtonComp);