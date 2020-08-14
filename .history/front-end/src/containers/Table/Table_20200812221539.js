import React, { useEffect, useContext } from 'react';


export default function Table() {
  const { state, getTodos } = useContext(todoContext);
  return (
    <h1>Table</h1>
  )
}
