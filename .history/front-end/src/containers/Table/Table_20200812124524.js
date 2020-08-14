import React, { useEffect } from 'react';

export default function Table() {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <h1>Table</h1>
  )
}
