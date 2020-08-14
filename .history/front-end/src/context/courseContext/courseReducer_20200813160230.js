import { GET_CURRENT_COURSE, CATCH_ERROR, SET_LOADING } from "../types";

const handlers = {
  [GET_CURRENT_COURSE]: (state, { payload }) => ({
    ...state,
    date: payload.date,
    valute: payload.valute,
    loading: false,
    state:payload.
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

export const courseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
