import React, { useState } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  })

  const onChangeHandler = event => {
    setInputValues({
      ...dataInputValues,
      [event.target.id]: event.target.value,
    });
    console.log(dataInputValues)
  }

  const onSubmitHandler

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
