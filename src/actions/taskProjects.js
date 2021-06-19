export const inputChange = 'inputChange'
export const addTask = 'addTask'
export const addProject = 'addProject'
export const completedStatus = 'completedStatus'

export const handleInputChange = (input) => ({
    type: inputChange,
    payload: input
})

export const handleClickAddTask = (projectId) => ({
    type: addTask,
    payload: projectId
})

export const handleClickAddProject = (event) => ({
    type: addProject,
    payload: event
})

export const handleClickCompletedStatus = (taskId) => ({
    type: completedStatus,
    payload: taskId
})