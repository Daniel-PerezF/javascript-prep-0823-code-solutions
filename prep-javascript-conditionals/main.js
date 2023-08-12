/* Your JS goes in this file */
const age = 24;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log('Is adult:', isAdult(age));

const student1Score = 99;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log('Did student pass:', didStudentPass(student1Score));

const student2Score = 100;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log('Student 2 score:', gradeCalculator(student2Score));

const season = 'autumn';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "It's really hot today!";
  } else if (season === 'spring') {
    return 'The flowers are blooming!';
  } else if (season === 'autumn') {
    return 'The leaves are changing colors!';
  } else if (season === 'winter') {
    return "It's very cold today!";
  } else {
    return 'Please enter a valid season!';
  }
}
console.log('Season:', seasonMessenger(season));

const dayOfTheWeek = 'Friday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'Have a great weekend!';
  } else {
    return "It's a weekday!";
  }
}
console.log('Day of the week:', dayDetector(dayOfTheWeek));
