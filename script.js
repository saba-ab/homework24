// 1
let evenNumbers = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
  sum += evenNumbers[i];
}
console.log(sum);

// 2
let middle = {
  name: "saba",
  age: 22,
  address: "dolabauri str. N 35",
};
let jungle = {
  name: "dato",
  age: 19,
  address: "shuamta str. N 20",
};
let support = {
  name: "giorgi",
  age: 17,
  address: "dolidze str. N 42",
};
let players = [middle, jungle, support];

// 3
console.log(
  `My name is ${players[0].name},  my age is ${players[0].age}, my address is ${players[0].address}. `
);

// 4
if (players[1].age < 19) {
  console.log(`${players[1].name} is a teenager`);
} else {
  console.log(`${players[1].name} is an adult`);
}

// 5

let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 6
const currentTime = new Date();
const currentDay = currentTime.getDay();
const currentHour = currentTime.getHours();
let weekDay;

switch (currentDay) {
  case 0:
    weekDay = "Sunday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  default:
    weekDay = "Invalid day";
}
console.log(weekDay);

// 6 second version

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (currentHour >= 5 && currentHour < 12) {
  console.log(`It is ${weekDays[currentDay]} morning`);
} else if (currentHour >= 12 && currentHour < 17) {
  console.log(`It is ${weekDays[currentDay]} afternoon`);
} else if (currentHour >= 17 && currentHour < 21) {
  console.log(`It is ${weekDays[currentDay]} evening`);
} else {
  console.log(`It is ${weekDays[currentDay]} night`);
}
