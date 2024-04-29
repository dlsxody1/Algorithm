function solution(num, total) {
    var answer = [];
    const start = Math.ceil((2 * total / num - (num - 1)) / 2);
    for(let i = 0 ; i < num ; i++){
        answer.push(start+i);
    }
    
    return answer;
}