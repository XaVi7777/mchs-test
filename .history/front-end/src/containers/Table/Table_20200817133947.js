import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableContainer, Paper,
} from '@material-ui/core';
import DownloadLink from "react-download-link";
import { courseContext } from '../../context/courseContext/courseContext';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableBody from '../../components/TableBody/TableBody';
import DataInput from '../../components/UI/DataInput/DataInput';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import Button from '../../components/UI/Button/Button';
import moment from 'moment-with-locales-es6';

const useStyles = makeStyles({
  tableContainer: {
    width: '75%',
    height: '75%',
    margin: '20px auto',
    borderRadius: '25px',
  },
  dataInputContainer: {
    margin: '15px 0',
  },
  btnContainer:{
    
  }
  btn: {
    margin: '10px auto'
  }
});

export default function DenseTable() {
  const {
    state, getCurrentCourse, getCourseByDate,
    getReport,
  } = useContext(courseContext);
  const [dataInput, setDataInput] = useState('');
  const [dataInputBtn, setDataInputBtn] = useState(true);
  const [filtered, toggleFilter] = useState(false);
  const [filteredValute, filterValute] = useState([]);
  const [sortLabel, toggleSortLabel] = useState({
    sortByName: true,
    sortByCourse: true,
  });
  const classes = useStyles();

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const onSubmitHandler = event => {

    if (event.key && event.key !== 'Enter') {
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

      toggleFilter(true);

      if (sortLabel.sortByName) {
        filterValute(
          state.valute.sort((prev, next) => {
            if (next.name._text > prev.name._text) {
              return -1;
            }
            return 1;
          })
        );
      } else {
        filterValute(
          state.valute.sort((prev, next) => {
            if (prev.name._text > next.name._text) {
              return -1;
            }
            return 1;
          })
        );
      }

      toggleSortLabel({
        ...sortLabel,
        sortByName: !sortLabel.sortByName,
      });
    } else if (+id === 4) {

      toggleFilter(true);

      if (sortLabel.sortByCourse) {
        filterValute(
          state.valute.sort((prev, next) => parseFloat(next.value._text) - parseFloat(prev.value._text))
        )
      } else {
        filterValute(
          state.valute.sort((prev, next) => parseFloat(prev.value._text) - parseFloat(next.value._text))
        );
      }

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
          <div className={classes.dataInputContainer}>
            <DataInput
              onChange={event => {
                setDataInput(event.target.value);
                setDataInputBtn(false);
              }}
              onKeyPress={onSubmitHandler}
              label="Выберите дату"
            />
            <Button
              color="primary"
              text="Отправить"
              disabled={dataInputBtn}
              onClick={onSubmitHandler}
            />
          </div>
          <SearchInput
            id="filled-full-width"
            label="Код"
            margin="normal"
            variant="filled"
            placeholder="Введите код валюты"
            fullWidth={true}
            onChange={onChangeHandler}
          />

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
        {
          state.linkFile
          &&
          <div className={classes.btnContainer}>
            <button
              className={classes.btn}
            >
              <DownloadLink
                label="Выгрузить отчёт"
                filename="report.json"
                exportFile={() => getReport(state.linkFile)}
              />

            </button>
          </div>
        }
      </TableContainer>
    </>
  );
}
