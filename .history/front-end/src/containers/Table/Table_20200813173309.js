import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableContainer, Paper,
} from '@material-ui/core'
import { courseContext } from '../../context/courseContext/courseContext';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableBody from '../../components/TableBody/TableBody';
import DataInput from '../../components/UI/DataInput/DataInput';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import moment from 'moment-with-locales-es6';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '75%',
    margin: '20px auto',
    borderRadius: '25px'
  },
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const {
    state, getCurrentCourse, getCourseByDate
  } = useContext(courseContext);
  const [dataInput, setDataInput] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }



  const onSubmitHandler = event => {
    if (event.key !== 'Enter') {
      return
    }
    if (dataInput) {
      moment.locale('ru');
      getCourseByDate(moment(dataInput).format('L'))
    }
  }

  const

  return (
    <>
      <TableContainer
        component={Paper}
        className={classes.tableContainer}
      >
        <div className="data">
          <div>
            <h3>Курс на {state.date} года</h3>
          </div>

          <DataInput
            onChange={event => setDataInput(event.target.value)}
            onKeyPress={onSubmitHandler}
          />
          <SearchInput
            id="filled-full-width"
            label="Код"
            margin="normal"
            variant="filled"
            placeholder="Введите код валюты"
            fullWidth={true}
          />
          {
            state.errorMessage
            &&
            <p>{state.errorMessage}</p>
          }

        </div>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHeader />
          <TableBody
            valute={state.valute}
          />
        </Table>
      </TableContainer>
    </>
  );
}
