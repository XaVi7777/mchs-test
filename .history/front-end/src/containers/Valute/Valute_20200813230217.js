import React, { useState, useContext } from 'react';
import moment from 'moment-with-locales-es6';
importc courseContext from '../../context/courseContext/courseContext';
import DataInput from '../../components/UI/DataInput/DataInput';
import { courseContext } from '../../context/courseContext/courseContext';

export default ({ id, getCurrentValute }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  });
  const {
    getCurrentValute,
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
      <h1>Valute</h1>
    </>

  )
}
