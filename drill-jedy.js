function jedyName(fistName, lastName){
	return lastName.substring(0, 3) + fistName.substring(0, 2);
}

console.log(jedyName("Fabian", "Lema"));