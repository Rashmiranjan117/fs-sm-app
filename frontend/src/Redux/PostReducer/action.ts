import * as types from "./actionType";

const getPostRequest = () => {
  return { type: types.GET_POST_REQUEST };
};

const getPostSuccess = (payload: any) => {
  return { type: types.GET_POST_SUCCESS, payload };
};

const getPostFailure = () => {
  return { type: types.GET_POST_FAILURE };
};

export { getPostFailure, getPostSuccess, getPostRequest };
