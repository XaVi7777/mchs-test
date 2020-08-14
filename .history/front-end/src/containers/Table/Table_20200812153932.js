import React, { useEffect } from 'react';
import convert from 'xml-js';

export default class Table extends React.Component {
  async componentDidMount() {
    let decoder = new TextDecoder()
    const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    const text = await response.text();
    decoder.decode(text)
    const result = convert.xml2json(text, { compact: true, spaces: 4 });
    console.log(result)
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
