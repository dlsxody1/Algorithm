function solution(d, budget) {
    var answer = 0;
    let count = 0;
    
    d.sort((a,b) => a-b);
    for(let i = 0 ; i < d.length ; i++){
        if((budget - d[i]) < 0){
            break;
        }
        budget -= d[i];
        count++;
        if(budget <= 0){
            break;
        }
        
    }
        
    return count;
}