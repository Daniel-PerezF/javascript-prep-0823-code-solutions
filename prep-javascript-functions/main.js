function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('Add two numbers result:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const hoursToMinutesResult = convertHoursToMinutes(4);
console.log('Convert hours to minutes results:', hoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('Daniel');
console.log('Get greeting:', greeting);

function addMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addMultiplyBy5Result = addMultiplyBy5(2, 7);
console.log('Add multiply by 5 result:', addMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyDivideResult = multiplyAndDivideBy5(2, 10);
console.log('Multiply and divide by 5 result:', multiplyDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(224, 2);
console.log('Subtract two numbers result:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
const circleCircumference = getCircleCircumference(44);
console.log('Get circle circumference result:', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Daniel', 'Perez');
console.log('Get full name result:', fullName);

function cube(number) {
  return number * number * number;
}
const cubeResult = cube(5);
console.log('Get cube result:', cubeResult);
