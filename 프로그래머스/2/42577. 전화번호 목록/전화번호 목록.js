// function solution(phone_book) {
//     var answer = true;
//     for (let i = 1; i < phone_book.length; i++) {
//         if (phone_book[i].indexOf(phone_book[0]) === 0) {
//             answer = false;
//             break;
//         }
//     }
//     return answer;
// }

function solution(phone_book) {
    phone_book.sort(); // 전화번호를 사전순으로 정렬

    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 전화번호와 다음 전화번호를 비교
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두어인 경우 false 반환
        }
    }
    
    return true; // 모든 전화번호가 접두어가 아닌 경우 true 반환
}