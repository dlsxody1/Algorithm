// function solution(name) {
//     var answer = 0;
//     let firstName = 'A'.repeat(name.length);
//     // charCode 97 - 122 A-Z 25개
//     const ACode = 'A'.charCodeAt(0)
//     for(let i = 0 ; i < name.length ; i++){
//         let nameCode = name[i].charCodeAt(0);
//         if(name[i].charCodeAt(0) < 110){
//             answer += (name[i].charCodeAt(0) - ACode)
//         }else{
//             answer += (122 - name[i].charCodeAt(0) - 1)
//         } 
//     }
//     return answer;
// }

function solution(name) {
    let answer = 0;
    let minMove = name.length - 1; // 커서 이동 최소 횟수

    for (let i = 0; i < name.length; i++) {
        // 문자 변경 횟수 계산 A에서 원하는 알파벳까지 가는게 빠른지, Z가 빠른지 계산
        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);

        // 커서 이동 횟수 계산
        let nextIdx = i + 1;
        while (nextIdx < name.length && name[nextIdx] === 'A') {
            nextIdx++;
        }
        minMove = Math.min(minMove, i + name.length - nextIdx + Math.min(i, name.length - nextIdx));
    }

    return answer + minMove;
}

