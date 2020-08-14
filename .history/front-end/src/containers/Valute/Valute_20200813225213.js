import React, { useState } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  })

  const onChangeHandler = event => {
    moment.locale('ru');
    setInputValues({
      ...dataInputValues,
      [event.target.id]: moment(dataInput).format('L')event.target.value,
    });
  }

  const onSubmitHandler = event => {
    if (event.key !== 'Enter') {
      return
    }
    if (dataInputValues.start && dataInputValues.finish) {
      console.log(dataInputValues)
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
