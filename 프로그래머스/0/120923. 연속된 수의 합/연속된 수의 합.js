function solution(num, total) {
    var answer = [];
    const middle = Math.ceil(total/num);
    for(let i = 0 ; i < num ; i++){
        answer.push(middle-(Math.floor(num/2)) + i)
    }
    
    return answer;
}