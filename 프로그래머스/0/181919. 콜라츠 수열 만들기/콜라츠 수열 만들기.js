function solution(n) {
    var answer = [];
    let i = 0;
    while(true){
        answer.push(n)
        if(n % 2 === 0){
            n = n / 2;
        }else{
            n = (3 * n) + 1
        }
        
        if(n === 1) {
            answer.push(n)
            break};
    }
    return answer;
}