function factorial(num){
    if(num <= 1){
        return num;
    }
    return num * factorial(num-1)
}

function solution(n) {
    let count = 1;
    while(true){
        factorial(count);
        if(factorial(count) > n){
            break;
        }
        count++;
    }
    
    return count-1;
}