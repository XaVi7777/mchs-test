import React, { useEffect, useContext } from 'react';
import {
  TableCell, TableHead, TableRow,
} from '@material-ui/core'
imports { headers } from './constants';


export default function TableHeader
<TableHead>
  <TableRow>
    <TableCell>Цифровой код</TableCell>
    <TableCell align="right">Валюта </TableCell>
    <TableCell align="right">Номинал</TableCell>
    <TableCell align="right">Название</TableCell>
    <TableCell align="right">Курс</TableCell>
  </TableRow>
</TableHead>
