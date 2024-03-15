function solution(my_string) {
    let answer = 0;
    let temp = ""; // 연속된 숫자를 저장할 임시 문자열

    for (let i = 0; i < my_string.length; i++) {
        // 현재 문자가 숫자인 경우
        if (!isNaN(my_string[i]) && my_string[i] !== " ") {
            temp += my_string[i]; // 임시 문자열에 추가
        } else {
            // 숫자가 아닌 경우, 임시 문자열에 숫자가 저장되어 있다면 합산
            if (temp !== "") {
                answer += Number(temp);
                temp = ""; // 임시 문자열 초기화
            }
        }
    }

    // 마지막에 저장된 숫자가 있을 경우 합산
    if (temp !== "") {
        answer += Number(temp);
    }

    return answer;
}