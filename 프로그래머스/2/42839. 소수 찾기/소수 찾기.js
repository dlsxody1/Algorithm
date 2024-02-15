function solution(numbers) {
    const numArray = numbers.split('');

    // 1. 모든 숫자 조합한 배열 생성 
        // 모든 숫자 조합 생성
    const permutations = new Set();

    const makeCombinations = (arr, str) => {
        if (str.length > 0) permutations.add(parseInt(str));
        if (arr.length === 0) return;
        for (let i = 0; i < arr.length; i++) {
            const newArr = [...arr];
            newArr.splice(i, 1);
            makeCombinations(newArr, str + arr[i]);
        }
    };

    makeCombinations(numArray, '');
    // console.log(permutations)

    // 3. 소수여부 판별 (filter)
    const resultArr = [...permutations].filter(el => {
        return isPrime(el) && el !== 0 && el !== 1
    })


    // 4. 갯수 카운팅 
    return resultArr.length
}


function isPrime(num){
  if(num === 1) return false;
  for(let i = 2; i <= num / 2; i++) {
  		if(num % i === 0) return false;
	} 
  return true
}