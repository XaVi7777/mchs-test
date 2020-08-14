import React, { useEffect, useContext } from 'react';
import { courseContext} from '../../context/courseContext/courseContext';

export default function Table() {
  const { state, getCurrentCourse } = useContext(todoContext);

  useEffect(() => {
    getCurrentCourse();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <h1>Table</h1>
  )
}
