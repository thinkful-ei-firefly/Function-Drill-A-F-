function daysInMonth(month, leapYear){
	let result = "";
	switch(month){
		case "January":
		case "March":
		case "May":
		case "July":
		case "August":
		case "October":
		case "December":
			result = `${month} has 31 days`;
			break;

		case "February":
			result = "February has " + (leapYear?29:28) + " days";
			break;
		
		case "April":
		case "June":
		case "September":
		case "November":
			result = `${month} has 30 days`;
			break;
		default:
			result = "Must provide a valid month.";
	}
	return result;
}

console.log(daysInMonth("July"));
console.log(daysInMonth("June"));
console.log(daysInMonth("February"));
console.log(daysInMonth("February", true));
console.log(daysInMonth("Other"));