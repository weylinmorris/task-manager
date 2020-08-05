import moment from 'moment'
import uuid from 'uuid'

export const addItem = ({ createdAt = moment().format('x'), dueDate, title, notes, completed }) => ({
    type: 'ADD_ITEM',
    item: {
        id: uuid(),
        createdAt,
        dueDate,
        title,
        notes,
        completed
    }
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id
})

export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
})

export const toggleCompleted = (id) => ({
    type: 'TOGGLE_COMPLETED',
    id
})