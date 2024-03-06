function solution(arr, queries) {
    queries.forEach((el) => {
        const [a,b] = el;
        [arr[a],arr[b]] = [arr[b] , arr[a]];
    });
    return arr;
}