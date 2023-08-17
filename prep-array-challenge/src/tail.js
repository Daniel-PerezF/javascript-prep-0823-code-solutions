/* exported tail */
function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    newArray.push(value);
  }
  return newArray;
}
