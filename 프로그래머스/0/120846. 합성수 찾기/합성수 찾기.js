function divisor(n){
    let count = 0;
    let i = 1;
    while (i <= n) {
        if (n % i === 0) {
            count++;
        }
        i++;
    }
    
    return count > 2
}

function solution(n) {
    let answer = 0;
    for(let i = 4 ; i <= n ; i++){
        if(divisor(i)){answer++;} 
    }
    return answer;
}

