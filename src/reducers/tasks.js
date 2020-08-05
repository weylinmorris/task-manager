const tasksReducerDefaultState = localStorage.getItem('toDoItems') ? JSON.parse(localStorage.getItem('toDoItems')) : []

export default (state = tasksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state, action.item]
        case 'REMOVE_ITEM': 
            return state.filter(({ id }) => id != action.id)
        case 'EDIT_ITEM': 
            return state.map(item => {
                if (item.id === action.id) return { ...item, ...action.updates }
                else return item
            })
        case 'TOGGLE_COMPLETED': 
            return state.map(item => {
                if (item.id === action.id) return { ...item, completed: !item.completed }
                else return item
            })
        default: 
            return state
    }
}