import { GET_CURRENT_COURSE, CATCH_ERROR, SET_LOADING } from "../types";

const handlers = {
  [GET_TODOS]: (state, { payload }) => ({
    ...state,
    todos: payload,
    loading: false
  }),
  [SET_LOADING]: state => ({
    ...state,
    loading: true,
  }),
  [CATCH_ERROR]: (state, { payload }) => ({
    ...state,
    errorMessage: payload,
  }),
  DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
