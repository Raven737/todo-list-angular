import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo } from './todo.actions';
import { initialState } from './todo.state';

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => ({
    ...state,
    todos: [
      ...state.todos,
      { userId: 1, id: state.todos.length + 1, title, completed: false },
    ],
  })),
  on(deleteTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== index),
  }))
);