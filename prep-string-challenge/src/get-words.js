/* exported getWords */
function getWords(string) {
  const myArray = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return myArray;
  }
}
