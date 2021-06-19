import { themeChange } from '../actions/theme'

const originalState = {
    theme: 'light'
}

export const themeReducer = (state=originalState, action) => {
    switch(action.type) {
        case themeChange: {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}