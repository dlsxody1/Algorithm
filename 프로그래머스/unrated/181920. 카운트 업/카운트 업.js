function solution(start_num, end_num) {
    let answer = [];
    for(let i = start_num ; i <= end_num ; i++){
        answer.push(i);
    }
        
        // return Array(end_num).fill('_').map((_,i) => i+1).filter((num,i) => start_num <= i+1);
    return answer;
}