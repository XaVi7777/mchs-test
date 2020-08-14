import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableContainer, Paper,
} from '@material-ui/core'
import { courseContext } from '../../context/courseContext/courseContext';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableBody from '../../components/TableBody/TableBody';
import DataInput from '../../components/UI/DataInput/DataInput';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '75%',
    margin: '20px auto',
  },
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const { state, getCurrentCourse } = useContext(courseContext);
  const [dataInput, setDataInput] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const onChangeHandler = (event) => {
    console.log(event.target.value)
  }

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
            onChange={onChangeHandler} />
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
