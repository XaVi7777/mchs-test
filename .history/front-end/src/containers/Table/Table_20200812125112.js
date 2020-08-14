import React, { useEffect } from 'react';

export default class Table extends React.Component {
  useEffect(async () => {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
    console.log(response)
    // eslint-disable-next-line
  }, []);

render()return (
  <h1>Table</h1>
)
}
