const person = {
  firstName: 'Daniel',
  lastName: 'Perez',
  hobby: 'Photography',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Unemployed';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'Costco';
console.log("The person's previous job was: ", person['previousJob']);

console.log('The complete person object: ', person);
