// function solution(k, dungeons) {
//     var answer = 0
    
//     //최소 필요 피로도 - 소모 피로도 값이 가장 큰 순으로 정렬
//     dungeons = dungeons.sort((a, b) => {
//     if (b[0] - b[1] === a[0] - a[1]) return b[0] - a[0];
//     return b[0] - b[1] - (a[0] - a[1]);
//   });
    
//     for(let i = 0 ; i < dungeons.length ; i++){
//         if(dungeons[i][0] > k){
//             return answer;
//         }
//         k = k - dungeons[i][1];
//         answer++;
//     }
    
//     console.log(dungeons);
//     return answer;
// }

function solution(k, dungeons) {
    let maxCount = 0;
    
    const dfs = (fatigue, count, visited) => {
        let isEnd = true;
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i] || dungeons[i][0] > fatigue) {
                continue;
            }
            isEnd = false;
            visited[i] = true;
            dfs(fatigue - dungeons[i][1], count + 1, visited);
            visited[i] = false;
        }
        if (isEnd) {
            maxCount = Math.max(maxCount, count);
        }
    };
    
    dfs(k, 0, Array(dungeons.length).fill(false));
    return maxCount;
}