import React, { useReducer } from 'react';
import { courseContext } from './courseContext';
import { courseReducer } from './courseReducer';
import {
  SET_LOADING, GET_CURRENT_COURSE, CATCH_ERROR,
} from '../types';


export const CourseState = ({ children }) => {
  const initialState = {
    date: '',
    valute: [],
    filteredValute: [],
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

  const getCourseByDate = async date => {
    setLoading();
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date }),
    });

    const json = await response.json();

    if (json.success) {
      dispatch({
        type: GET_CURRENT_COURSE,
        payload: json.data,
        errorMessage: json.errorMessage,
      })
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const getCurrentValute = async ({ start, finish }, id) => {
    const proxe = 'https://cors-anywhere.herokuapp.com/';
    const URL = `${http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${start}&date_req2=${finish}&VAL_NM_RQ=${id}`;
    const response = await fetch(URL);
    const xml = await response.text();
    console.log(xml)
  }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <courseContext.Provider
      value={{
        getCurrentCourse, getCourseByDate, getCurrentValute,
        state,
      }}
    >
      {children}
    </courseContext.Provider>
  )
}
