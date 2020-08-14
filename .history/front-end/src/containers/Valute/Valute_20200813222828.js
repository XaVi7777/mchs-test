import React from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {

  return (
    <>
      <form>
        <DataInput
          label="Старт"
        />
        <DataInput
          label="Финиш"
        />
      </form>
      <h1>Valute</h1>
    </>

  )
}
