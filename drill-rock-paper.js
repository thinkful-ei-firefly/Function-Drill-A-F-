const randomNo = Math.floor(Math.random() * 3) + 1;
  // console.log(randomNo);

  if (num === randomNo) {
    return 'tie';
  } else if (num === 1 && randomNo === 3) {
    return 'you win!'
  } else if (num === 3 && randomNo === 2) {
    return 'you win!';
  } else if (num === 2 && randomNo === 1) {
    return 'you win!';
  }
  else {
    return 'you lose'
  }
}


try {
// console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(5));
console.log(rockPaperScissors('potato'));
console.log(rockPaperScissors(1));
} catch(e) {
  console.log(e.message);
}
console.log(rockPaperScissors(2));
