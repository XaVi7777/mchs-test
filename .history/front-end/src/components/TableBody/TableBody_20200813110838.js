

<TableBody>
  {
    state.valute
    &&
    state.valute.map(valute => {
      const valuteData = getPropsFromValute(valute);
      const id = valuteData[0];

      return (
        <TableRow
          key={id}
        >
          <TableCell component="th" scope="row">
            {valuteData[1]}
          </TableCell>
          <TableCell align="right">{valuteData[2]}</TableCell>
          <TableCell align="right">{valuteData[3]}</TableCell>
          <TableCell align="right">{valuteData[4]}</TableCell>
          <TableCell align="right">{valuteData[5]}</TableCell>
        </TableRow>
      )
    })
  }
</TableBody>
