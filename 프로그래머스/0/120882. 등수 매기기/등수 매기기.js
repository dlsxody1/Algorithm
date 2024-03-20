function solution(score) {
    var answer = [];
    
    
    const averages = score.map((el, idx) => ({ average: (el[0] + el[1]), index: idx }));
    
    averages.sort((a, b) => b.average - a.average);
    
    // 등수 부여
    let rank = 1;
    for (let i = 0; i < averages.length; i++) {
        if (i > 0 && averages[i].average !== averages[i - 1].average) {
            rank = i + 1;
        }
        answer[averages[i].index] = rank;
    }

    return answer;
}
