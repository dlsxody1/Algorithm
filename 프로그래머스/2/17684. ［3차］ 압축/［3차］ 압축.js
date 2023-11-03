
// function makeCharCode(str){
//     return str.charCodeAt(0)-64;
// }

// function makeReverseCharCode(str){
//     return str.charCodeAt(0)-64;
// }

// function solution(msg) {
//     var answer = [];
//     const msgArr = msg.split('');
//     console.log(msgArr);
//     for(let i = 0 ; i < msgArr.length ; i++){
//         answer.push(makeCharCode(msgArr[i]) + makeCharCode(msgArr[i]+1))
//     }
    
    
//     return answer;
// }

function solution(msg) {
    var answer = [];
    var dictionary = {}; // 사전 초기화
    var index = 1;

    // 사전에 영문 대문자를 초기화
    for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        dictionary[String.fromCharCode(i)] = index++;
    }
    console.log(dictionary);

    var w = msg[0]; // 현재 문자열 초기화

    for (var i = 1; i < msg.length; i++) {
        var c = msg[i];
        var wc = w + c;

        // 사전에 wc가 있을 때까지 c를 더해가며 검색
        if (dictionary[wc]) {
            w = wc; // w에 wc를 업데이트
        } else {
            answer.push(dictionary[w]); // w에 해당하는 색인 번호를 출력
            dictionary[wc] = index++; // wc를 사전에 추가
            w = c; // w를 c로 업데이트
        }
    }

    answer.push(dictionary[w]); // 마지막 w에 해당하는 색인 번호를 출력
    return answer;
}