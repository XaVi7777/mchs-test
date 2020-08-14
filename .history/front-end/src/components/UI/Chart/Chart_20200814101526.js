import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
  container: {
    width: '75%',
    height: '75%',
    margin: '20px auto',
  },
});

export default ({
  labels, datasets, start, finish
}) => {
  const classes = useStyles();
  return (
    <div className={classes.tableContainer}>
      <h1>Курс валюты с {start}  по {finish}</h1>
      <Line
        data={{
          labels,
          datasets,
        }}
        width={600}
        height={300}
      />
    </div>
  )
}



