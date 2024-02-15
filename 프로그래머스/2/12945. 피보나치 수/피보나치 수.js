
//     let pboArr = [0,1];
    
//     for(let i = 2 ; i <= n; i++){
//          pboArr.push((pboArr[i - 1] + pboArr[i - 2]) % 1234567);
//     }
    
    
//     return  pboArr[n];








function solution(n) {
    const pboArr = [0,1];
    for(let i = 2; i <= n ; i++){
        pboArr.push((pboArr[pboArr.length - 1] + pboArr[pboArr.length - 2]) % 1234567 )
    }
    
    console.log(pboArr);
    return pboArr[n] 
    
}





