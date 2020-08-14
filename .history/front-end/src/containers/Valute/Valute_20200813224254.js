import React, { useState } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  })

  const onChangeHandler = event => {
    setInputValues({
      [event.target.id]: event.target.value,
    });
    console.log(data)
  }
  return (
    <>
      <div>
        <DataInput
          id="start"
          label="Старт"
          onChange={onChangeHandler}
        />
        <DataInput
          id="finish"
          label="Финиш"
          onChange={onChangeHandler}
        />
      </div>
      <h1>Valute</h1>
    </>

  )
}
