import React, { useReducer } from 'react';
import convert from 'xml-js';
import { courseContext } from './courseContext';
import { courseReducer } from './courseReducer';
import {
  SET_LOADING, GET_CURRENT_COURSE, CATCH_ERROR,
  CURRENT_VALUTE, CLEAN_CHART,
} from '../types';
import { PROXY, BACK_END_API_URL, API_URL } from './options';

export const CourseState = ({ children }) => {
  const initialState = {
    date: '',
    valute: [],
    filteredValute: [],
    loading: false,
    errorMessage: '',
    currentValute: '',
    linkFile: '',
  }

  const [state, dispatch] = useReducer(courseReducer, initialState);

  const getCurrentCourse = async () => {

    setLoading();
    const response = await fetch(BACK_END_API_URL);

    const json = await response.json();

    if (json.success) {
      dispatch({
        type: GET_CURRENT_COURSE,
        payload: json.data,
        link: json.link
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
    const response = await fetch(BACK_END_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date }),
    });

    const json = await response.json();

    if (json.success) {

      dispatch({
        type: GET_CURRENT_COURSE,
        payload: json.data,
        link: json.link,
        errorMessage: json.errorMessage,
      })
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const getCurrentValute = async ({ start, finish }, id, title) => {

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
      const URL = `${PROXY}${API_URL}?date_req1=${start}&date_req2=${finish}&VAL_NM_RQ=${id}`;

      const response = await fetch(URL);
      const xml = await response.text();
      const json = convert.xml2json(xml, { compact: true, spaces: 4 });
      localStorage.setItem(title + start + finish, json);
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

  const createReport = async link => {
    const response = await fetch(`${BACK_END_API_URL}/${state.date}/${link}`);
    const json = await response.json();
    if (json.error) {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
    if (json.success) {
      return getReport(link)
    }
  }

  const getReport = async link => {
    const responseReport = await fetch(link);
    const jsonReport = await responseReport.json();
    return JSON.stringify(jsonReport);
  }

  const cleanChart = () => {
    dispatch({
      type: CLEAN_CHART,
      payload: '',
    })
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
        cleanChart, createReport,
        state,
      }}
    >
      {children}
    </courseContext.Provider>
  )
}

