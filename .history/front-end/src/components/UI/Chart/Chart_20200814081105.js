import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class extends React.Component {
  state = {
    data: {
      labels: []
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={data}
          // width={100}
          // height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}
