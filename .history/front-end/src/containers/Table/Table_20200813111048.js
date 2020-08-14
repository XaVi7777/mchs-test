import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper,
} from '@material-ui/core'
import { courseContext } from '../../context/courseContext/courseContext';
import { getPropsFromValute } from './utils';
import TableHeader from '../../components/TableHeader/TableHeader';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
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

  console.log(state)


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHeader />
<Table
      </Table>
    </TableContainer>
  );
}
