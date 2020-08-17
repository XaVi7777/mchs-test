import {
  GET_CURRENT_COURSE, CATCH_ERROR, SET_LOADING, CURRENT_VALUTE,
} from "../types";

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

  [CURRENT_VALUTE]: (state, { payload }) => ({
    ...state,
    currentValute: payload,
  }),

  DEFAULT: state => state,
}

export const courseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}