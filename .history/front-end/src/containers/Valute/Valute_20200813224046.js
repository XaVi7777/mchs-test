import React from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';

export default ({ id }) => {
  const [dataInputValues, setInputValues] = useState({
    start: '',
    finish: '',
  })

  const onChangeHandler = event => { }
  return (
    <>
      <div>
        <DataInput
          id="start"
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
