import React from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {

  return (
    <>
      <div>
        <DataInput
          label="Старт"
        />
        <DataInput
          label="Финиш"
        />
      </div>
      <h1>Valute</h1>
    </>

  )
}
