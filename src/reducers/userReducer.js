import {
  AUTH_USER_FAIL,
  AUTH_USER_START,
  AUTH_USER_SUCCESS
} from "../actions/types";
INITIAL_STATE = {
  email: "demo@todo",
  password: "demo",
  logged: false,
  loading: false
};
export default function userReducer(state = INITIAL_STATE, { type, payload }) {
  console.log(type, payload);
  switch (type) {
    case AUTH_USER_START:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
      return { ...state, logged: true, loading: false };
    case AUTH_USER_FAIL:
      return {
        ...state,
        logged: false,
        loading: false
      };
    default:
      return state;
  }
}
