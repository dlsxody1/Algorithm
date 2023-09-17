function solution(my_string, letter) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
         //substring은 새로운 문자열을 반환한다. 그렇기 떄문에 틀림
            // my_string.substring(i,i+1)
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }
    return answer;
}