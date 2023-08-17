function solution(n) {
    
    let pboArr = [0,1];
    
    for(let i = 2 ; i <= n; i++){
         pboArr.push((pboArr[i - 1] + pboArr[i - 2]) % 1234567);
    }
    
    
    return  pboArr[n];
}