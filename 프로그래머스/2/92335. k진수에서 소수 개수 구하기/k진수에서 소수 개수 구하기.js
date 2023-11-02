// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


function solution(n, k) {
    var answer = 0;
    const knary = n.toString(k).split(0);
    for(let i = 0 ; i < knary.length ; i++){
        if(isPrimeNumber(Number(knary[i]))){
            answer++;
        }
    }
    
    return answer;
}