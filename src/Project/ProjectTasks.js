import classnames from 'classnames/bind'
import styles from './AddProject.modules.scss'
import TasksList from '../Task/TasksList'
import { InputTask } from '../InputTask/inputTask'
import { useParams, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    tasksById: state.taskProjects.tasksById,
    projectsById: state.taskProjects.projectsById,
    theme: state.theme.theme
})

const ProjectTasksComp = ({ tasksById, projectsById, theme }) => {
    const { projectId } = useParams()
    if (projectId in projectsById) {
        const projectName = projectsById[projectId].name
        const projectTaskIds = projectsById[projectId].tasksIds.map(id => String(id))
        const projectTasks = Object.keys(tasksById).filter(key => projectTaskIds.includes(key)).reduce((object, key) => {
            return {
                ...object,
                [key]: tasksById[key]
            }
        }, {})

        return (
            <div className={cx('tasks')}>
                <h1 className={cx('header', `header-theme-${theme}`)}>{projectName}</h1>
                <div className={cx('new_task')}>
                    <InputTask projectId={projectId} />
                </div>
                <TasksList tasksById={projectTasks} />
            </div>
        )
    } else {
        return (
            <Redirect to='/' />
        )
    }
}

export const ProjectTasks = connect(mapStateToProps)(ProjectTasksComp);