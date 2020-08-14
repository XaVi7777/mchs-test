import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper,
} from '@material-ui/core'
import { courseContext } from '../../context/courseContext/courseContext';
import { getPropsFromValute } from './utils';
import TableHeader from './TableHeader/TableHeader'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
        <TableBody>

          {
            state.valute
            &&
            state.valute.map(valute => {
              const valuteData = getPropsFromValute(valute);
              const id = valuteData[0];

              return (
                <TableRow
                  key={id}
                >
                  <TableCell component="th" scope="row">
                    {valuteData[1]}
                  </TableCell>
                  <TableCell align="right">{valuteData[2]}</TableCell>
                  <TableCell align="right">{valuteData[3]}</TableCell>
                  <TableCell align="right">{valuteData[4]}</TableCell>
                  <TableCell align="right">{valuteData[5]}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
