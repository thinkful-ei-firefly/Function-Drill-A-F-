function jedyName(fistName, lastName){
	//console.log(fistName.substring(0, 2));
	//console.log(lastName.substring(0, 3));
	return lastName.substring(0, 3) + fistName.substring(0, 2);
}

console.log(jedyName("Fabian", "Lema"));