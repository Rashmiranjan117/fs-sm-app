import * as types from "./actionType";

interface indivisualPost {
  post: String;
  caption: String;
  createdAt: String;
  liked: [String];
  comments: [String];
}

interface defaultState {
  posts: indivisualPost | [];
  isLoading: boolean;
  isError: boolean;
  userId: String | null;
}

interface actionInterface {
  type: string;
  payload: string | null;
}

const initState: defaultState = {
  posts: [],
  isLoading: false,
  isError: false,
  userId: null,
};

export const reducer = (state = initState, action: actionInterface) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_POST_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_POST_SUCCESS:
      return { ...state, isLoading: false, isError: false, posts: payload };
    case types.GET_POST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
