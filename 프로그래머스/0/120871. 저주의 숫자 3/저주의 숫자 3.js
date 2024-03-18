function solution(n) {
    var answer = 1;
    for(let i = 1 ; i <= n ; i++){
        
        while(answer % 3 === 0 || String(answer).includes('3')){
            answer++;
        }
        answer++;
        
    }
    return answer - 1;
}