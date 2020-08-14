export const getPropsFromValute = valute => {
return               const cellsprops = Object.keys(valute).map((key, index) => {
  if (index === 0) {
    return valute[key].id;
  }
  return valute[key]._text
})
console.log(cellsprops)
}
