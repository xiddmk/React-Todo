import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Feature/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
