import { combineReducers } from 'redux'
import { taskProjectsReducer } from './taskProjects'
import { themeReducer } from './theme'

export const rootReducer = combineReducers({
    taskProjects: taskProjectsReducer,
    theme: themeReducer
})