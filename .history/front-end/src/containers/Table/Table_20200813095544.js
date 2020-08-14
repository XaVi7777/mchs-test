import React, { useEffect, useContext } from 'react';
import { courseContext } from '../../context/courseContext/courseContext';

export default function Table() {
  const { state, getCurrentCourse } = useContext(courseContext);

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  console.log(state)

  return (
    <h1>Table</h1>
  )
}
