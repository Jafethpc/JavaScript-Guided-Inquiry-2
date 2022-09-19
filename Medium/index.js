const num = prompt("What number do you want to choose?");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function numToMonth(num1) {
  num1 >= 1 && num1 <= 12
    ? alert(months[num1 - 1])
    : alert("Input a number between 1 and 12");
}

numToMonth(num);
