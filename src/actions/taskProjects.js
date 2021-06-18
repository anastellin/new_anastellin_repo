import { getState, postProject, postTask, putTaskStatus } from '../api'

export const inputChange = 'inputChange'
export const stateGet = 'stateGet'

export const handleInputChange = (input) => ({
    type: inputChange,
    payload: input
})

export const fetchGetState = () => (dispatch) => {
    return getState().then((state) => {
        dispatch({
            type: stateGet,
            payload: state
        })
    })
}

export const fetchPostAddProjectClick = () => (dispatch, getState) => {
    const get_State = getState()
    const projectName = get_State.taskProjects.projectName
    postProject(projectName).then(() => {
        getState()
    })
}

export const fetchPostAddTaskClick = (project_ID) => (dispatch, getState) => {
    const get_State = getState()
    const taskName = get_State.taskProjects.taskName
    const taskDescription = get_State.taskProjects.taskDescription
    postTask(project_ID, taskName, taskDescription)
}

export const fetchPostTaskStatusClick = (completed) => (dispatch, getState) => {
    const get_State = getState()
    const projectID = completed.dataset.projectId
    const taskID = completed.dataset.taskId
    const task_Name = get_State.taskProjects.tasksById[taskID].name
    const task_Description = get_State.taskProjects.tasksById[taskID].description
    putTaskStatus(projectID, taskID, task_Name, task_Description)
}