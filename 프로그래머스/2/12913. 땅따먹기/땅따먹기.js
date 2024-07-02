// function solution(land) {
//     var answer = 0;

//     land.forEach((arr,i,self) => {
//         const maxNum = Math.max(...arr)
//         const maxNumIndex = arr.indexOf(maxNum);
//         if(i !== self.length){
//             self[i+1].splice(maxNumIndex, 1);    
//         }
//         answer += maxNum;
        
//     })
    

//     return answer;
// }

function solution(land) {
    const N = land.length;

    // DP 배열 초기화, 첫 번째 행은 초기 값으로 사용
    let dp = [...land[0]];

    // 두 번째 행부터 마지막 행까지 반복
    for (let i = 1; i < N; i++) {
        let current = [...land[i]]; // 현재 행 복사
        let newDp = new Array(4).fill(0); // 새로운 DP 배열 초기화

        // 현재 행의 각 열에 대해 최대 점수를 계산
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    newDp[j] = Math.max(newDp[j], current[j] + dp[k]);
                }
            }
        }

        dp = newDp; // 새로운 DP 배열로 갱신
    }

    return Math.max(...dp); // 마지막 행의 최대 점수를 반환
}