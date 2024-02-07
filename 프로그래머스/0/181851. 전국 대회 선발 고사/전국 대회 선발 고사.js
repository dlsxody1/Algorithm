function solution(rank, attendance) {
    const RankArr = rank.map((el,i) => {
        return { ranker : el , participation : attendance[i], index : i}
    }).filter((el) => el.participation === true).sort((a,b) => a.ranker - b.ranker).slice(0,3);
    console.log(RankArr)
    
    return RankArr[0].index * 10000 + RankArr[1].index * 100 + RankArr[2].index;
}