import classnames from 'classnames/bind'
import { connect } from 'react-redux'
import { fetchPostAddProjectClick } from '../actions/taskProjects'
import styles from './AddProject.modules.scss'

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnfetchPostAddProjectClick: () => dispatch(fetchPostAddProjectClick())
})

const addProjectButtonComp = ({ dispatchOnfetchPostAddProjectClick }) => {
    const onfetchPostAddProjectClick = () => {
        dispatchOnfetchPostAddProjectClick()
    }

    return (
        <div>
            <button className={cx('buttonProj')} onClick={onfetchPostAddProjectClick}>Add</button>
        </div>
    )
}

export const AddProjectButton = connect(null, mapDispatchToProps)(addProjectButtonComp);