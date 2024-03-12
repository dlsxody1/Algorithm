function solution(arr, query) {
    query.forEach((el, i) => {
        if (i % 2 === 0) {
            // 짝수 인덱스일 때, arr에서 query[i]번 인덱스 뒷부분을 잘라냅니다.
            arr = arr.slice(0, el + 1);
        } else {
            // 홀수 인덱스일 때, arr에서 query[i]번 인덱스 앞부분을 잘라냅니다.
            arr = arr.slice(el);
        }
    });
    return arr;
}