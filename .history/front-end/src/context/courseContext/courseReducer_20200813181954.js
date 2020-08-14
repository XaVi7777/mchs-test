import { GET_CURRENT_COURSE, CATCH_ERROR, SET_LOADING } from "../types";

const handlers = {
  [GET_CURRENT_COURSE]: (state, { payload, errorMessage }) => ({
    ...state,
    date: payload.date,
    valute: payload.valute,
    loading: false,
    errorMessage: errorMessage,
  }),

  [SET_LOADING]: state => ({
    ...state,
    loading: true,
  }),

  [CATCH_ERROR]: (state, { payload }) => ({
    ...state,
    errorMessage: payload,
  }),

  [SEARCH_VALUTE]: (state, { payload }) => ({
...state
  })
  DEFAULT: state => state,
}

export const courseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
