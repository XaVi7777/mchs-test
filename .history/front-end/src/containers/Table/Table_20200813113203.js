import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableContainer, Paper,
} from '@material-ui/core'
import { courseContext } from '../../context/courseContext/courseContext';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableBody from '../../components/TableBody/TableBody';

const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

export default function DenseTable() {
  const { state, getCurrentCourse } = useContext(courseContext);
  const classes = useStyles();

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (

      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHeader />
        <TableBody
          valute={state.valute}
        />
      </Table>

  );
}
