import React from 'react'
import { MyTodoList } from './Tasks/Tasks'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyTodoList />
      </div>
    </Provider>
  )
}

export default App;