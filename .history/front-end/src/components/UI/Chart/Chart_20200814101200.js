import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ labels, datasets }) => {

  return (
    <div className="chart">
      <h1>Курс валюты с {}</h1>
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



