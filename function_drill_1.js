function  getYearOfBirth(age){
	return 2019 - age;
}

function createGreeting(name, age){
    const yob = getYearOfBirth(age);
	return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob} ` ;
}

const greeting1 = createGreeting("Fabian", 23);
console.log(greeting1); 