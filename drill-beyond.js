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
beyond(maxNumber);
beyond(-234);
beyond(3423);
beyond(0);