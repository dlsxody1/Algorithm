function solution(rank, attendance) {
    const [a,b,c] = rank.map((el,i) => {
        return { ranker : el , participation : attendance[i], index : i}
    }).filter((el) => el.participation === true).sort((a,b) => a.ranker - b.ranker)
    
    return a.index * 10000 + b.index * 100 + c.index;
}