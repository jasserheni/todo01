
import { ADD_TODO, COMPETE_TODO, DELETE_TODO, EDIT_TODO } from "../constant/actionTypes";

export const addTodo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask,
  };
};
export const editTodo = (p) => {
  return {
    type: EDIT_TODO,
    
    payload: p,
  };
};

export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  };

  export const completeTodo = (id) => {
    return {
      type: COMPETE_TODO,
      payload: id,
    };
  };
