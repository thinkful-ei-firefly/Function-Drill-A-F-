function  getYearOfBirth(age){
	if (age < 1) {
		throw new Error('Age can not be negative');
	}
	return 2019 - age;
}

function createGreeting(name, age){
	if (!name || !age){
		throw new Error('Arguments not valid');
	}
    const yob = getYearOfBirth(age);
	return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob} ` ;
}


try {
	const greeting1 = createGreeting("Fabian", 45);
	console.log(greeting1);
} catch(error){
	console.log(error.message)
}
// const greeting1 = createGreeting("Fabian", -23);


//console.log("hello")
