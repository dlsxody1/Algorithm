function solution(str_list) {
    var answer = [];
    // "l"과 "r" 중 먼저 나오는 것이 있는지 확인합니다.
    const lIndex = str_list.indexOf('l');
    const rIndex = str_list.indexOf('r');

    // "l"이나 "r"이 없는 경우 빈 리스트를 반환합니다.
    if (lIndex === -1 && rIndex === -1) {
        return answer;
    }

    // "l"이 "r"보다 먼저 나오거나, "r"이 없는 경우
    if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
        answer = str_list.slice(0, lIndex);
    }
    // "r"이 "l"보다 먼저 나오거나, "l"이 없는 경우
    else if (rIndex !== -1 && (lIndex === -1 || rIndex < lIndex)) {
        answer = str_list.slice(rIndex + 1);
    }

    return answer;
}