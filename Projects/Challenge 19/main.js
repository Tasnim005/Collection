// const arrow = document.querySelector(".arrow");

// const currentDate = new Date();
// const currentDay = currentDate.getDate();
// const currentMonth = currentDate.getMonth() + 1;
// const currentYear = currentDate.getFullYear();

// arrow.addEventListener("click", calculateAge);
// function validateInput(input, characterLimit, maxValue, fieldName) {
//   const regex = /^\d+$/g;
//   const period = /^\.$/g

//   if (input.length > characterLimit || input > maxValue || !regex.test(input) || period.test(input) == true) {
//     console.log(`Invalid ${fieldName} input`);
//     return false;
//   }

//   return true;
// }


// function calculateAge() {
//   const inputDay = document.getElementById("day").value;
//   const inputMonth = document.getElementById("month").value;
//   const inputYear = document.getElementById("year").value;

//   const outputDay = document.querySelector('.output.day')
//   const outputMonth = document.querySelector('.output.month')
//   const outputYear = document.querySelector('.output.year')

//   if (
//     !validateInput(inputDay, 2, 31, 'day') ||
//     !validateInput(inputMonth, 2, 12, 'month') ||
//     !validateInput(inputYear, 4, currentYear, 'year')
//   ) {
//     return;
//   }

//   // return; statement is used to prevent further execution of the function when an invalid day input is detected. When the day input is invalid, it means the user entered an incorrect day value (e.g., greater than 31 or not a number). If we allow the function to continue executing with an invalid input, the age calculation would be incorrect and potentially misleading.

//   outputDay.innerHTML = currentDay - inputDay
//   outputMonth.innerHTML = currentMonth - inputMonth
//   outputYear.innerHTML = currentYear - inputYear
// }


var now = moment();
console.log(now)

function calculateAge(dateOfBirth) {
  const currentDate = moment();
  const age = currentDate.diff(dateOfBirth, 'years');
  return age;
}

const age = calculateAge(moment('2003-03-23'));
console.log(age)