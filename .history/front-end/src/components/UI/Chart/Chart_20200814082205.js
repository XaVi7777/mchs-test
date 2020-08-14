import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class extends React.Component {
  state = {
    data: {
      labels: ['Boston', 'Worchester', 'Lowel'],
      datasets:[
          617594,
          28596,
          13846,
        ]
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.data}
          // width={100}
          // height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}
