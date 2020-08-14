import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

export default ({
  labels, datasets, start, finish
}) => {

  return (
    <div className="chart">
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



