import React, { useEffect, useContext } from 'react';


export default function Table() {
  const { state, getCurrentCourse } = useContext(todoContext);

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);
  return (
    <h1>Table</h1>
  )
}
