// 중복 예외 처리 못한 케이스
// function solution(n, lost, reserve) {
//     let answer = 0;
//     let i = 0;
//     const lostPeople = [...lost];
    
//     for(let i = 0; i < reserve.length ;i++){
//         if(reserve.includes(lostPeople[i] + 1) || reserve.includes(lostPeople[i] - 1)){
//             lostPeople.splice(i,1,'_');
//             answer++;
//         } 
//         if(answer >= lost.length) break;
//     }
//     return n-lost.length+answer;
// }

function solution(n, lost, reserve) {
  const ableToLend = reserve
    .filter((res) => lost.indexOf(res) === -1)
    .sort((a, b) => a - b);
  const wantToBorrow = lost
    .filter((lose) => reserve.indexOf(lose) === -1)
    .sort((a, b) => a - b);

  return (
    n -
    wantToBorrow.filter((lose) => {
      const target = ableToLend.find((res) => Math.abs(res - lose) === 1);
      if (!target) return true;
      ableToLend.splice(ableToLend.indexOf(target), 1);
    }).length
  );
}