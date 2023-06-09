function solution(n, k) {
    let total = n * 12000 + k * 2000;
    
    if(n === 10){
        total = total - 2000;
    }else if(n > 10){
        total = total - 2000 *(n - n % 10)/10;
    }
    
    return total;
}