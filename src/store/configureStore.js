import { createStore } from 'redux'
import tasksReducer from '../reducers/tasks'

export default () => {
    const store = createStore(tasksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store
}