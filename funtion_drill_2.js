function jedyName(fistName, lastName){
	//console.log(fistName.substring(0, 2));
	//console.log(lastName.substring(0, 3));
	return lastName.substring(0, 3) + fistName.substring(0, 2);
}

// console.log(jedyName("Fabian", "Lema"));

function beyond(num){
	if (num === Infinity || num === -Infinity){
		console.log("And beyond");
	}else if (num>0){
		console.log("To infinity");
	}else if (num<0){
		console.log("To negative infinity");
	}else if (num === 0){
		console.log("Staying home");
	}
} 
let maxNumber = Math.pow(10, 1000)
// beyond(maxNumber);
// beyond(-234);
// beyond(3423);
// beyond(0);



function decoder(message) {
	let words = message.split(' ');
	let decoded = '';
	for (let i = 0; i < words.length; i++) {
		if (words[i][0] === 'a') {
			decoded += words[i][1];
		} else if (words[i][0] === 'b') {
			decoded += words[i][2];
		} else if (words[i][0] === 'c') {
			decoded += words[i][3];
		} else if (words[i][0] === 'd') {
			decoded += words[i][4];
		} else {
			decoded += ' '
		}
	}
	return decoded;
}

console.log(decoder('craft block argon meter bells brown croon droop'))