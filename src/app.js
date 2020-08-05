import AppRouter from './AppRouter'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
store.subscribe(() => {
    localStorage.setItem('toDoItems', JSON.stringify(store.getState()))
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))