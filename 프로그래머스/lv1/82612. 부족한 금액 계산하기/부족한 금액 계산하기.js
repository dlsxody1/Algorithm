function solution(price, money, count) {
    
    let priceArr = [];
    
    for(let i = 1 ; i <= count ; i++){
        priceArr.push(i * price);
    }
    answer = priceArr.reduce((a,b) => a + b + 0) - money;
    if(answer < 0) return 0;
    
    
    return answer;
}