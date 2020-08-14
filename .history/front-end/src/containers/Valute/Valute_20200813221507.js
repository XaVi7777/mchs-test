import React from 'react';

export default ({ match }) => {
  console.log(match.params.id)
  return (
    <h1>Valute</h1>
  )
}
