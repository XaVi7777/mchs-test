import React, { useEffect } from 'react';

export default class Table extends React.Component {
  async componentDidMount() {

    const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    const text = await response.text();
    console.log(text)
  }
  // useEffect(async () => {
  //   const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
  //   console.log(response)
  //   // eslint-disable-next-line
  // }, []);

  render() {
    return (
      <h1>Table</h1>
    )
  }
}
