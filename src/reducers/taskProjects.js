import { inputChange, stateGet } from '../actions/taskProjects'
import normalizeState from '../normalizing'

const originalState = []

export const taskProjectsReducer = (state = normalizeState(originalState), action) => {
    switch(action.type) {
        case stateGet: {
          return {
            ...state,
            projectsById: action.payload.projectsById,
            tasksById: action.payload.tasksById
          }
        }
        case inputChange: {
            const { value, name } = action.payload
            return {
                ...state,
                [name]: value
            }
        }
        default:
            return state
    }
}

// const originalState = {
//     taskName: '',
//     taskDescription: '',
//     projectName: '',
//     tasksById: {
//         1: {id: 1, name: "Task1", description: "This is the first task", completed: true},
//         2: {id: 2, name: "Task2", description: "This is the second task", completed: true},
//         3: {id: 3, name: "Task3", description: "This is the third task", completed: false},
//         4: {id: 4, name: "Task4", description: "This is the fourth task", completed: false},
//         5: {id: 5, name: "Task5", description: "This is the fifth task", completed: false},
//         6: {id: 6, name: "Task6", description: "This is the sixth task", completed: true},
//         7: {id: 7, name: "Task7", description: "This is the seventh task", completed: true}
//     },
//     projectsById: {
//         1: {id: 1, name: 'HomeTasks', tasksIds: [1, 2, 3]},
//         2: {id: 2, name: 'UniverTasks', tasksIds: [4, 5, 6, 7]}
//     }
// }

// export const taskProjectsReducer = (state=originalState, action) => {
//     switch(action.type) {
//         case inputChange: {
//             const { value, name } = action.payload
//             return {
//                 ...state,
//                 [name]: value
//             }
//         }
//         case addTask: {
//             const projectId = action.payload
//             const newId = Object.keys(state.tasksById).length + 1
//             const newTask = {
//               id: newId,
//               name: state.taskName,
//               description: state.taskDescription,
//               completed: false
//             }
//             if (projectId === 'no_project') {
//                 return {
//                     ...state,
//                     tasksById: {
//                         ...state.tasksById,
//                         [newId]: newTask
//                     }
//                 }
//             } else {
//                 const newTasksById = {...state.tasksById}
//                 newTasksById[newId] = newTask
//                 const newProjectsById = {...state.projectsById}
//                 newProjectsById[projectId] = {...newProjectsById[projectId]}
//                 newProjectsById[projectId].tasksIds = [...newProjectsById[projectId].tasksIds, newId]
          
//                 return {
//                     ...state,
//                     tasksById: newTasksById,
//                     projectsById: newProjectsById
//                 }
//             }
//         }
//         case addProject: {
//             const newId = Object.keys(state.projectsById).length + 1
//             const newProject = {
//               id: newId,
//               name: state.projectName,
//               tasksIds: []
//             }
        
//             const newProjectsById = {...state.projectsById}
//             newProjectsById[newId] = newProject
    
//             return {
//                 ...state,
//                 projectsById: newProjectsById
//             }
//         }
//         case completedStatus: {
//             let taskId = action.payload
//             const newTasks = {...state.tasksById}
//             newTasks[taskId] = {...newTasks[taskId], completed: true}
        
//             return {
//                 ...state,
//                 tasksById: newTasks
//             }
//         }
//         default:
//             return state
//     }
// }