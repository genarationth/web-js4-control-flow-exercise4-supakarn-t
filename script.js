const dayNumber = Math.floor(Math.random() * 8); // Random 0-7 (and 7 will show invalid)
console.log(dayNumber);

let dayName =
	dayNumber === 0
		? "Sunday"
		: dayNumber === 1
		? "Monday"
		: dayNumber === 2
		? "Tuesday"
		: dayNumber === 3
		? "Wednesday"
		: dayNumber === 4
		? "Thursday"
		: dayNumber === 5
		? "Friday"
		: dayNumber === 6
		? "Saturday"
		: "Error! Invalid day number";
console.log(dayName);
