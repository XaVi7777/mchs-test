import React from 'react';
import { DebounceInput } from 'react-debounce-input';

export default function () {
  return (
    <div>
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
      // onChange={event => this.setState({ value: event.target.value })} 
      />

      <p>Value: {this.state.value}</p>
    </div>
  )
}
