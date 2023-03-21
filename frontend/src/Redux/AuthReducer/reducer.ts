import * as types from "./actionTypes";

interface defaultState {
  token: string | null;
  isLoading: boolean;
  isError: boolean;
}

interface actions {
  type: string;
  payload?: string | null;
}

const initState: defaultState = {
  token: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action: actions) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_AUTH_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_AUTH_SUCCESS:
      return { ...state, isError: false, isLoading: false, token: payload };

    case types.GET_AUTH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
