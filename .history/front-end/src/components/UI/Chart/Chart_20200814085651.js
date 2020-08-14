import React, { PureComponent } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: [],
        datasets: [{
          label: 'Population',
          data: []
        }]
      }
    }
  }

  componentDidMount() {

    console.log(this.props.valute)
  }

  componentDidUpdate() {
    console.log(this.props)
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
