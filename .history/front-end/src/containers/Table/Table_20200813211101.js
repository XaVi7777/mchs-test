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
    width: '75%',
    height: '75%',
    margin: '20px auto',
    borderRadius: '25px'
  },
});

export default function DenseTable() {
  const {
    state, getCurrentCourse, getCourseByDate,
  } = useContext(courseContext);
  const [dataInput, setDataInput] = useState('');
  const [filtered, toggleFilter] = useState(false);
  const [filteredValute, filterValute] = useState([]);
  const classes = useStyles();
  const [sortLabel, toggleSortLabel] = useState({
    sortByName: true,
    sortByCourse: true,
  });

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
      toggleFilter(false);
      filterValute([]);
      getCourseByDate(moment(dataInput).format('L'))
    }
  }

  const onChangeHandler = event => {
    const { value } = event.target;
    if (value.trim()) {
      toggleFilter(true);
      filterValute(state.valute.filter(valute => valute.charcode._text.indexOf(value) !== -1))
    } else {
      toggleFilter(false);
    }
  }

  const onClickHandler = event => {
    const { id } = event.target;

    if (+id === 3) {
      toggleSortLabel({
        ...sortLabel,
        sortByName: !sortLabel.sortByName,
      });

      toggleFilter(true);
      state.valute.sort((prev, next) => {

        if (next.name._text > prev.name._text) {
          return sortLabel.sortByName ? -1;
        } 
      })

      filterValute(
        state.valute
      );
      console.log(filteredValute)
    } else if (+id === 4) {
      toggleSortLabel({
        ...sortLabel,
        sortByCourse: !sortLabel.sortByCourse,
      })
    }
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
            onChange={onChangeHandler}
          />
          {/* <DebounceInput /> */}
          {
            state.errorMessage
            &&
            <p>{state.errorMessage}</p>
          }

        </div>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHeader
            sortLabel={sortLabel}
            onClick={onClickHandler}
          />
          <TableBody
            valute={filtered ? filteredValute : state.valute}
          />
        </Table>
      </TableContainer>
    </>
  );
}
