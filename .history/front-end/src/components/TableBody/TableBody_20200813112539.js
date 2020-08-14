import React from 'react';
import {
  TableBody, TableCell, TableRow, Paper,
} from '@material-ui/core'
import { getPropsFromValute } from './utils';

export default function ({ valute }) {
  console.log(valute);
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
                    {valuteData[1]}
                  </TableCell>
                  : <TableCell
                    key={id + index}
                    align="right"
                  >{valuteData[index]}
                  </TableCell>
              })
            }
          </TableRow>
        )
      })
    }
  </TableBody>)
}
