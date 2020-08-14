import React from 'react';
import {
  TableCell, TableHead, TableRow, TableSortLabel
} from '@material-ui/core';

import { headers } from './constants';


export default function TableHeader({ onClick }) {
  return (
    <TableHead>
      <TableRow>
        {
          headers.map((title, index) => (
            <TableCell
              align={index === 0 ? 'left' : "right"}
              key={Date.now() + index}
            >
              <TableSortLabel
                active={true}
                direction="desk"
                on
              />
              {title}
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  )
}
