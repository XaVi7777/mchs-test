import React, { useState, useContext } from 'react';
import moment from 'moment-with-locales-es6';
import DataInput from '../../components/UI/DataInput/DataInput';
import { courseContext } from '../../context/courseContext/courseContext';
import Chart from '../../components/UI/Chart/Chart';

export default ({ id }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  });
  const {
    state, getCurrentValute,
  } = useContext(courseContext);

  const onChangeHandler = event => {
    moment.locale('ru');
    setInputValues({
      ...dataInputValues,
      [event.target.id]: moment(event.target.value).format('L').replace(/\./g, '/'),
    });
  }

  const onSubmitHandler = event => {
    if (event.key !== 'Enter') {
      return
    }
    if (dataInputValues.start && dataInputValues.finish) {
      getCurrentValute(dataInputValues, id)
    }
  }

  return (
    <>
      <div>
        <DataInput
          id="start"
          label="Старт"
          onChange={onChangeHandler}
          onKeyPress={onSubmitHandler}
        />
        <DataInput
          id="finish"
          label="Финиш"
          onChange={onChangeHandler}
          onKeyPress={onSubmitHandler}
        />
      </div>
      {
        state.currentValute
        &&
      }
      <Chart
        valute={state.currentValute}
      />
    </>

  )
}
