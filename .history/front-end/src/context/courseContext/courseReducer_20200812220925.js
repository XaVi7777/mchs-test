import { GET_CURRENT_COURSE, CATCH_ERROR } from "../types";

const handlers = {


  DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
