function solution(nums) {
    //3개를 골라서 리턴한다.
  let len = nums.length;
  let answer = 0;


    //len - 2 <- 3개의 숫자를 뽑기 위함
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
    
  return answer;
}

const isPrime = (n) => {
    //소수는 1과 자기 자신으로만 나누어져야함.
    // n이 소수인지 판별하려면 2부터 Math.sqrt(n)까지만 확인
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

