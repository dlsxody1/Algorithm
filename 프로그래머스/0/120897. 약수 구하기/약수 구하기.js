function solution(n) {
    let current = 1;
    const answer = [];
    while(current <= n){
        if(n % current === 0){
            answer.push(current);
        };
        current++;
        
        
    }
    return answer;
}