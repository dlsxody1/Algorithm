// function getDivisorCount(n) {
//     let count = 0;    
//      for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             count++;
//         }
//     }
    
//     return count;
// }

// function solution(number, limit, power) {
//     var answer = 0;

//     for (let i = 1; i <= number; i++) {
//         const divisorCount = getDivisorCount(i);
//         if (divisorCount <= limit) {
//             answer += divisorCount;
//         } else {
//             answer += power;
//         }
//     }

//     return answer;
// }
//시간 초과

function solution(number, limit, power) {
  const nums = [];
    // 약수는 본래 값을 제외하고 n/2보다 클 수 없기 때문이다.

  for (let cur = 1; cur <= number; cur++) {
    let divisor = 0;
    for (let i = 1; i <= cur / 2; i++) {

      // i로 나누어 나머지가 0이면 약수이므로
      // 약수면 1을 더해준다.
      if (cur % i === 0) {
        divisor += 1;
      }
    }

    // 위에서 본래 값을 제외하고 반절만 돌렸기 때문에
    // 본래 값을 넣어준다 생각 하고 1을 더 더해준다.
    nums.push(divisor + 1);
  }

  return nums
    .map((n) => {

      // n이 limit보다 크게되면 협약기관에서 정한 공격력을 가지는 무기를
      // 그렇지 않으면 그대로 n을 구매한다.
      return n > limit ? power : n;
    })
    .reduce((acc, cur) => acc + cur, 0);
}