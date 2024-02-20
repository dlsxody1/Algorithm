function solution(lottos, win_nums) {
    var answer = [];
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let correctCount = 0;
    let zeroCount = 0;
    
    for(let i = 0 ; i < lottos.length ; i++){
        if(win_nums.includes(lottos[i])){
            correctCount += 1;
        }else if(lottos[i] === 0){
            zeroCount += 1;
        }
    }
    
    const highRank = rank[correctCount + zeroCount];
    const lowerRank = rank[correctCount];
    
    
    
    return [highRank, lowerRank];
}