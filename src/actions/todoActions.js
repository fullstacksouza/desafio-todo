import {
  CREATE_TODO_FAIL,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  SHOW_NEW_TODO_FORM,
  CLOSE_NEW_TODO_FORM,
  SHOW_EDIT_TODO_FORM,
  UPDATE_TODO,
  SAVE_TODO,
  ORDERING_TODOS,
  GET_ALL_TODOS,
  MAKE_TODO_DONE,
  DELETE_TODO
} from "./types";
import { AsyncStorage } from "react-native";

export const showFormNewTodo = () => ({
  type: SHOW_NEW_TODO_FORM
});
export const closeNewTodoForm = () => ({
  type: CLOSE_NEW_TODO_FORM
});
export const showEditTodoForm = todo => ({
  type: SHOW_EDIT_TODO_FORM,
  payload: todo
});
export const makeDone = todo => ({
  type: MAKE_TODO_DONE,
  payload: todo
});
export const saveTodo = todo => ({
  type: todo.id ? UPDATE_TODO : SAVE_TODO,
  payload: todo
});
export const orderingTodos = () => ({
  type: ORDERING_TODOS
});
export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: todo
});
