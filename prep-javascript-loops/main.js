// create your loops here.
function whileLoop1() {
  const newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}
console.log('whileLoop1 output:', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let index = 0;
  while (index <= 18) {
    newArray.push(index);
    index += 2;
  }
  return newArray;
}
console.log('whileLoop2 output:', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let index = 0; index <= 9; index++) {
    newArray.push(index);
  }
  return newArray;
}
console.log('forLoop1 output:', forLoop1());

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time till explosion', index);
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}
const object = {
  name: 'Albert Einstein',
  age: '144',
  hobby: 'Violin',
  invention: 'Theory of Relativity',
};
console.log(forInLoop1(object));

function forInLoop2(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
console.log(forInLoop2(object));
