import React, { useReducer } from 'react';
import { courseContext } from './courseContext';
import { courseReducer } from './courseReducer';
import { SET_LOADING, GET_CURRENT_COURSE, CATCH_ERROR } from '../types';


export const CourseState = ({ children }) => {
  const initialState = {
    date: '',
    valute: [],
    loading: false,
    errorMessage: ''
  }

  const API_URL = '/currentcourse';
  const [state, dispatch] = useReducer(courseReducer, initialState);

  const getCurrentCourse = async () => {
    setLoading();
    const response = await fetch(API_URL);

    const json = await response.json();
    if (json.success) {
      dispatch({
        type: GET_CURRENT_COURSE,
        payload: json.data,
      })
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  // const getTodos = async () => {
  //   setLoading();



  // const deleteTodo = async todoID => {
  //   setLoading();

  //   const response = await fetch(`${API_URL}/${todoID}`, {
  //     method: 'DELETE',
  //   });

  //   const json = await response.json();

  //   if (json.success) {
  //     await getTodos();
  //   } else {
  //     dispatch({
  //       type: CATCH_ERROR,
  //       payload: json.error,
  //     })
  //   }
  // }

  // const editTodo = async (todoID, title) => {
  //   const response = await fetch(`${API_URL}/${todoID}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title }),
  //   });
  //   const json = await response.json();
  //   if (json.success) {
  //     await getTodos();
  //   } else {
  //     dispatch({
  //       type: CATCH_ERROR,
  //       payload: json.error,
  //     })
  //   }
  // }

  // const getCurrentTodo = todoID => {
  //   const currentTodo = {};
  //   state.todos.forEach(todo => {

  //     if (todo.id === +todoID) {
  //       currentTodo.title = todo.title;
  //       currentTodo.id = todo.id
  //     }
  //   });
  //   return currentTodo.title
  // }

  // const addTodo = async title => {
  //   const response = await fetch(`${API_URL}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title }),
  //   });
  //   const json = await response.json();
  //   if (json.success) {
  //     await getTodos();
  //   } else {
  //     dispatch({
  //       type: CATCH_ERROR,
  //       payload: json.error,
  //     })
  //   }
  // }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <courseContext.Provider
      value={{
        getCurrentCourse,
        state,
      }}
    >
      {children}
    </courseContext.Provider>
  )
}
