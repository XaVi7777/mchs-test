export const getPropsFromValute = valute => {
  return Object.keys(valute).map((key, index) => {
    if (index === 0) {
      return valute[key].id;
    }
    else if( index)
    return valute[key]._text
  })
}
