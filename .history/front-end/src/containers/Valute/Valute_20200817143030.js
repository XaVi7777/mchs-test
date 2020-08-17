import React, { useState, useContext } from 'react';
import moment from 'moment-with-locales-es6';
import DataInput from '../../components/UI/DataInput/DataInput';
import { courseContext } from '../../context/courseContext/courseContext';
import Chart from '../../components/UI/Chart/Chart';
import Button from '../../components/UI/Button/Button';

export default ({ id, title }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
    errorMessage: '',
  });
  const [dataInputBtn, setDataInputBtn] = useState(true);
  const {
    state, getCurrentValute,
  } = useContext(courseContext);

  const onChangeHandler = event => {
    moment.locale('ru');
    setInputValues({
      ...dataInputValues,
      [event.target.id]: moment(event.target.value).format('L').replace(/\./g, '/'),
    });
    if (dataInputValues.start && dataInputValues.finish) {
      setDataInputBtn(false);
    };
  }

  const onSubmitHandler = event => {
    if (event.key && event.key !== 'Enter') {
      return
    }
    if (dataInputValues.start < dataInputValues.finish) {
      setInputValues({
        ...dataInputValues,
        errorMessage: ''
      });
      getCurrentValute(dataInputValues, id)
    } else {
      setInputValues({
        ...dataInputValues,
        errorMessage: 'Введите корректные данные'
      });
    }
  }

  return (
    <>
      {
        dataInputValues.errorMessage
        &&
        <p>{dataInputValues.errorMessage}</p>
      }
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
        <Button
          color="primary"
          text="Получить отчёт"
          disabled={dataInputBtn}
          onClick={onSubmitHandler}
        />
      </div>
      {
        state.currentValute
        &&
        <>
          <Chart
            labels={state.currentValute.labels}
            datasets={state.currentValute.datasets}
            start={dataInputValues.start}
            finish={dataInputValues.finish}
          />
        </>
      }
    </>

  )
}
