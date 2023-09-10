function solution(elements) {
    const n = elements.length;
    const uniqueSums = new Set();

    // 원형 수열의 길이만큼의 윈도우 생성
    for (let i = 0; i < n; i++) {
        let sum = 0;

        // 윈도우 내의 연속 부분 수열 합 계산
        for (let j = 0; j < n; j++) {
            sum += elements[(i + j) % n];
            uniqueSums.add(sum);
        }
    }

    return uniqueSums.size;
}