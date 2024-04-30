function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (makeNum(i, n)) {
            answer++;
        }
    }
    
    return answer;
}

function makeNum(start, target) {
    let total = 0;
    
    for (let i = start; total < target; i++) {
        total += i;
        if (total === target) {
            return true; 
        }
    }
    
    return false; 
}