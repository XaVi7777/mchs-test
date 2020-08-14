import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class extends React.Component {
  constructor(props)
  state = {
    data: {
      labels: ['Boston', 'Worchester', 'Lowel'],
      datasets:[{
        label: 'Population',
        data: [
          617594,
          28596,
          13846,
        ]
      }]
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.data}
          width={1000}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}
