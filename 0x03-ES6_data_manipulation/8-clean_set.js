export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  if (startString === '') {
    return '';
  }
  // Join the filtered values into a string separated by '-'
  return filteredValues.join('-');
}
