import React from 'react';
import { Bar } from 'react-chartjs-2';

export default ({ labels }) => {

  console.log(valute)
  return (
    <div className="chart">
      <h1>grafik</h1>
      <Bar
        data={{
          labels: valute.labels,
          // datasets: [
          //   {
          //     label: 'Курс валюты',
          //     data: [
          //       valute.datasets[0].data
          //     ]
          //   }
          // ],
        }}
        width={1000}
        height={500}
      />
      {/* <Bar
        data: {
//         labels: [],
//         datasets: [{
//           label: 'Курс Валюты',
//           data: []
//         }]
        width={1000}
        height={500}
        options={{ maintainAspectRatio: false }}
      /> */}
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


