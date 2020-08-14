import React, { useEffect, useContext } from 'react';
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
              valuteData.map((text, idex))
            }
            {/* <TableCell component="th" scope="row">
              {valuteData[1]}
            </TableCell>
            <TableCell align="right">{valuteData[2]}</TableCell>
            <TableCell align="right">{valuteData[3]}</TableCell>
            <TableCell align="right">{valuteData[4]}</TableCell>
            <TableCell align="right">{valuteData[5]}</TableCell> */}
          </TableRow>
        )
      })
    }
  </TableBody>)
}
