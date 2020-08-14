import React, { useEffect } from 'react';

export default function Table() {
  useEffect(async () => {
    await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
    console.log()
    // eslint-disable-next-line
  }, []);

  return (
    <h1>Table</h1>
  )
}
