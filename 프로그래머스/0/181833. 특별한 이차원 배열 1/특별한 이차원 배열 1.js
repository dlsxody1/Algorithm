function solution(n) {
    var answer = [];
    
    for(let i = 0 ; i < n ; i++){
        const newArr = Array(n).fill(0);
        newArr[i] = 1;
        answer.push(newArr);
    }
    return answer;
}