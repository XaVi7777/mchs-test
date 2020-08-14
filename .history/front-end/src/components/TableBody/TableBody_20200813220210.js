import React from 'react';
import {
  TableBody, TableCell, TableRow,
} from '@material-ui/core';
im
import { getPropsFromValute } from './utils';

export default function ({ valute }) {

  return (<TableBody>
    {
      valute
      &&
      valute.map(valute => {
        const valuteData = getPropsFromValute(valute);
        const id = valuteData[0];

        return (
          <TableRow
            key={id}
          >
            {
              valuteData.map((text, index) => {
                if (index === 0) {
                  return null;
                }
                return index === 1
                  ? <TableCell
                    key={id + index}
                    component="th"
                    scope="row"
                  >
                    {text}
                  </TableCell>
                  : <TableCell
                    key={id + index}
                    align="right"
                  >{text}
                  </TableCell>
              })
            }
          </TableRow>
        )
      })
    }
  </TableBody>)
}
