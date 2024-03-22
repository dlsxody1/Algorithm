function solution(myString, pat) {
//     const splits = myString.split(pat);
//     var answer = splits[0];
    
//     splits.forEach((el,i,arr) => {
//         if(el === ''){
//             answer += pat;
//         }else if(i === (arr.length-1)){
//             answer += pat
//         }
//     });
//     return answer;
     let index = myString.lastIndexOf(pat);
    
    // 찾은 부분 문자열을 반환합니다.
    return myString.substring(0, index + pat.length);
}