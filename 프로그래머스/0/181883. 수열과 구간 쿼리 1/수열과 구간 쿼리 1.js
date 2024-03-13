function solution(arr, queries) {
    queries.forEach((el, i) => {
        const [s, e] = el
        for(let z = s ; z <= e ; z++){
            arr[z]++;
        }
    });
    
    return arr;
}