import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        guardarTodo: (state,action) => {
            state.todoList.push(action.payload)
        },

        deleteLastTodo: (state,action) => {
            state.todoList.slice()
        }
    }
});

export const {guardarTodo, deleteLastTodo} = todoSlice.actions
export default todoSlice.reducer