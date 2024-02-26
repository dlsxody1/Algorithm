function solution(binomial) {
    var answer = 0;
    const op = {
        '+' : '+',
        '*' : '*',
        '-' : '-'
    }
    
    for(const operator of Object.values(op)){
        
        if(binomial.includes(operator)){
            const parts = binomial.split(operator);
            const a = parseInt(parts[0]); 
            const b = parseInt(parts[1]);
            console.log(operator)
            if (operator === '+') {
                answer = a + b;
            } else if (operator === '-') {
                answer = a - b;
            } else if (operator === '*') {
                answer = a * b;
            }
        }
    }
    return answer;
}