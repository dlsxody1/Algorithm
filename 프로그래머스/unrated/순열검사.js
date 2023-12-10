//프로그래머스 연습말고, 강의에 있는 부분을 풀어보았음.

## 문제
길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다.
1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.

제한사항
배열의 길이는 10만 이하입니다.
배열의 원소는 0 이상 10만 이하인 정수입니다.

//효율성 테스트 실패
// function solution(arr) {
//     var answer = true;
//     arr.sort();
//     console.log(arr);
//     for(let i = 0; i < arr.length-1 ; i++){
//         if(arr[i] !== arr[i + 1] -1 ){
//             answer = false;
//             break;
//         }
//     }
//     return answer;
// }

function solution(arr) {
    const n = arr.length;
    const set = new Set(arr);
    
    //set의 크기와 배열의 길이가 같지 않다면 중복된 값이 있거나, 1부터 n까지의 숫자가 있는 것이 아님.
    if (set.size !== n) {
        return false;
    }

    //1부터 n까지 모든 정수가 있는지 확인
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return false;
        }
    }

    return true;
}

   
