/* exported reverse */
function reverse(array) {
  const newArray = [];
  const reverse = array.length - 1;
  for (let i = reverse; i >= 0; i--) {
    const value = array[i];
    newArray.push(value);
  }
  return newArray;
}
