import {
  CREATE_TODO_FAIL,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  SHOW_NEW_TODO_FORM,
  CLOSE_NEW_TODO_FORM,
  SHOW_EDIT_TODO_FORM,
  SAVE_TODO,
  ORDERING_TODOS,
  GET_ALL_TODOS,
  MAKE_TODO_DONE,
  DELETE_TODO,
  UPDATE_TODO
} from "../actions/types";

const INITIAL_STATE = {
  todos: [],
  newTodo: {
    title: "",
    description: ""
  },
  editTodo: null,
  showNewTodoForm: false
};
export default function todoReducer(state = INITIAL_STATE, { type, payload }) {
  console.log("REDUCER", type, payload);
  switch (type) {
    case SHOW_NEW_TODO_FORM:
      return {
        ...state,
        showNewTodoForm: true
      };
    case SAVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            title: payload.title,
            description: payload.description
          }
        ]
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id == payload.id) {
            item = payload;
          }
          return item;
        })
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, { id: 1, title: 1, description: 2 }]
      };
    case CLOSE_NEW_TODO_FORM:
      return {
        ...state,
        showNewTodoForm: false,
        newTodo: {
          title: "",
          description: ""
        },
        editTodo: null
      };
    case SHOW_EDIT_TODO_FORM:
      return {
        ...state,
        showNewTodoForm: true,
        editTodo: payload
      };
    case ORDERING_TODOS:
      return {
        ...state,
        todos: state.todos.sort((a, b) => {
          return a.done ? 0 : -1;
        })
      };
    case MAKE_TODO_DONE:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (payload.id == item.id) {
            item.done = !item.done;
          }
          return item;
        })
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => {
          return item.id != payload.id;
        })
      };
    default:
      return state;
  }
}
