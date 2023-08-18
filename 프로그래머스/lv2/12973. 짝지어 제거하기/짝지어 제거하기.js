//substring은 immutable 이어서 안바뀌기 때문에 slice로 변경
function solution(s) {
//     let idx = 0;
    
//     while (idx < s.length - 1) { //문자열의 마지막 까지 검사.
//         if (s[idx] === s[idx+1]) {
//             s = s.slice(0, idx) + s.slice(idx + 2);
//             idx = Math.max(0, idx - 1); // 인덱스 업데이트
//         } else {
//             idx++;
//         }
//     }
    
//     return s.length === 0 ? 1 : 0;
    //stack으로 풀기
        const stack = [];

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 짝을 찾으면 스택에서 제거
        } else {
            stack.push(char); // 짝을 찾지 못하면 스택에 추가
        }
    }

    return stack.length === 0 ? 1 : 0;

}