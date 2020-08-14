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

  const getCourseByDate = async (date) => {
    console.log(date)
    const response = await fetch(API_URL );

    const json = await response.json();
    setLoading();
  }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <courseContext.Provider
      value={{
        getCurrentCourse, getCourseByDate,
        state,
      }}
    >
      {children}
    </courseContext.Provider>
  )
}
