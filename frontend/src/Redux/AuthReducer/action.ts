import * as types from "./actionTypes";


const getAuthRequest = () => {
  return { type: types.GET_AUTH_REQUEST };
};

const getAuthSuccess = (payload: any) => {
  return { type: types.GET_AUTH_SUCCESS, payload };
};

const getAuthFailure = () => {
  return { type: types.GET_AUTH_FAILURE };
};

export { getAuthFailure, getAuthRequest, getAuthSuccess };
