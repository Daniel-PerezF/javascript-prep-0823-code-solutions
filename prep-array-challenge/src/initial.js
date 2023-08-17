/* exported initial */
function initial(array) {
  const newArray = [];
  const exceptLast = array.length - 1;
  for (let i = 0; i < exceptLast; i++) {
    const value = array[i];
    newArray.push(value);
  }
  return newArray;
}
