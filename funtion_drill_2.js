function jedyName(fistName, lastName){
	//console.log(fistName.substring(0, 2));
	//console.log(lastName.substring(0, 3));
	return lastName.substring(0, 3) + fistName.substring(0, 2);
}

console.log(jedyName("Fabian", "Lema"));

function beyond(num){
	if (typeof num != "number"){
		console.log("And beyond");
	}else if (num>0){
		console.log("To infinity");
	}else if (num<0){
		console.log("To negative infinity");
	}else if (num==0){
		console.log("Staying home");
	}
} 

beyond("sdfsd");
beyond(-234);
beyond(3423);
beyond(0);
