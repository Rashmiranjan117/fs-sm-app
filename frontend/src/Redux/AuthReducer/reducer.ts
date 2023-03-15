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
    default:
      return state;
  }
};
