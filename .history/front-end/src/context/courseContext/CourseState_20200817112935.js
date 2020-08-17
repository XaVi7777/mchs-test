import React, { useReducer } from 'react';
import convert from 'xml-js';
import { courseContext } from './courseContext';
import { courseReducer } from './courseReducer';
import {
  SET_LOADING, GET_CURRENT_COURSE, CATCH_ERROR,
  CURRENT_VALUTE,
} from '../types';


export const CourseState = ({ children }) => {
  const initialState = {
    date: '',
    valute: [],
    filteredValute: [],
    loading: false,
    errorMessage: '',
    currentValute: '',
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
    const report = localStorage.getItem(start + finish);
    const dataForChart = {
      labels: [],
      datasets: [{
        label: 'Курс валюты',
        data: [],
      }]
    };
    let data;

    if (report) {
      data = JSON.parse(report);
    } else {
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const URL = `${proxy}http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${start}&date_req2=${finish}&VAL_NM_RQ=${id}`;
      const response = await fetch(URL);
      const xml = await response.text();
      const json = convert.xml2json(xml, { compact: true, spaces: 4 });

      localStorage.setItem(start + finish, json);
      data = JSON.parse(json);
    }

    const arrOfCourseValuts = data.ValCurs.Record;

    arrOfCourseValuts.forEach(key => {
      dataForChart.labels.push(
        key._attributes.Date
      );
      dataForChart.datasets[0].data.push(
        parseFloat(key.Value._text.replace(',', '.'))
      )
    });

    dispatch({
      type: CURRENT_VALUTE,
      payload: dataForChart,
    });
  }

  const getReport = async () => {
    console.log(state)
    const response = await fetch(`${API_URL}`)
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
        getReport,
        state,
      }}
    >
      {children}
    </courseContext.Provider>
  )
}
