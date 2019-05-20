import { AUTH_USER_START, AUTH_USER_SUCCESS, AUTH_USER_FAIL } from "./types";

import { AsyncStorage } from "react-native";
export const authUser = credentials => async dispatch => {
  dispatch(authUserStart());
  AsyncStorage.getItem("user")
    .then(user => {
      console.log(user);
      user = JSON.parse(user);
      if (
        user.password == credentials.password &&
        user.email == credentials.email
      ) {
        dispatch(authUserSuccess());
      } else {
        dispatch(authUserFail());
      }
    })
    .catch(err => console.log(err));
};

const authUserSuccess = () => ({
  type: AUTH_USER_SUCCESS
});

const authUserFail = () => ({
  type: AUTH_USER_FAIL
});

const authUserStart = () => ({
  type: AUTH_USER_START
});
