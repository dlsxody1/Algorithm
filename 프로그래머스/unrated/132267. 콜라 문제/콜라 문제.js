function solution(a, b, n) {
    var answer = 0;
    let count = 0;
    
    while(n/a >= 1){
        answer += parseInt(n/a) * b ;
        n = parseInt(n/a) * b + (n % a);
        console.log(answer);
    }
    return answer;
}