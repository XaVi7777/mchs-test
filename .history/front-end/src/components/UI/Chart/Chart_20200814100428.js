import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ labels, datasets }) => {

  return (
    <div className="chart">
      <h1>grafik</h1>
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
// export default class extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: {
//         labels: [],
//         datasets: [{
//           label: 'Курс Валюты',
//           data: []
//         }]
//       }
//     }
//   }

//   componentDidMount() {

//     console.log(this.props.valute)
//   }

//   componentDidUpdate() {
//     this.setState({
//       data: {
//         labels: this.props.valute.labels,
//       }
//     })
//     console.log(this.props)
//   }


