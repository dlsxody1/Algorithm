function solution(arr, queries) {
    var answer = [];
    queries.forEach((query) => {
        const [s, e, k] = query;
        let minGreater = Infinity; // 가장 작은 k보다 큰 값 초기화
        
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minGreater) {
                minGreater = arr[i]; // k보다 크면서 가장 작은 값 갱신
            }
        }
        
        if (minGreater === Infinity) {
            answer.push(-1); // 조건을 만족하는 값이 없을 경우 -1 저장
        } else {
            answer.push(minGreater); // 조건을 만족하는 값을 저장
        }
    });
    return answer;
}