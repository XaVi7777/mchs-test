import {
  GET_CURRENT_COURSE, CATCH_ERROR, SET_LOADING, CURRENT_VALUTE, CLEAN_CHART, 
} from "../types";

const handlers = {
  [GET_CURRENT_COURSE]: (state, { payload, errorMessage, link }) => ({
    ...state,
    date: payload.date,
    valute: payload.valute,
    loading: false,
    linkFile: link,
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

  [CLEAN_CHART]: (state, { payload }) => ({
    ...state,
    currentValute: payload,
  }),

  DEFAULT: state => state,
}

export const courseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
