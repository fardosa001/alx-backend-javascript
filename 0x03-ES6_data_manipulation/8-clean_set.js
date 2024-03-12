export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
    // Join the filtered values into a string separated by '-'
  return filteredValues.join('-');
}
