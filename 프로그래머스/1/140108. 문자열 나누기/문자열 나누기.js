function solution(s) {
    let answer = 0;
    while (s.length > 0) { 
        let countX = 0; 
        let countNotX = 0; 
        let i = 0;
        for (; i < s.length; i++) {
            if (s[i] === s[0]) {
                countX++; // 첫 글자와 같으면 countX 증가
            } else {
                countNotX++; // 다르면 countNotX 증가
            }
            if (countX === countNotX) {
                break;
            }
        }

        s = s.substring(i + 1);
        answer++; // 분해된 문자열의 개수 증가
    }
    return answer; // 분해된 문자열의 총 개수 반환
}