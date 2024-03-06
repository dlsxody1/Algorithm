function solution(l, r) {
    const result = [];

    for (let num = l; num <= r; num++) {
        if (isOnly05Number(num)) {
            result.push(num);
        }
    }

    if (result.length === 0) {
        return [-1];
    }

    return result;
}

// 숫자가 0과 5로만 이루어져 있는지 확인하는 함수
// 문자열의 전체가 "0"또는 "5"로 이루어진 경우 (문자열의 길이1이어도 되고 더 길어도 됨)
function isOnly05Number(num) {
    const numStr = num.toString();
    return /^[05]+$/.test(numStr);
}