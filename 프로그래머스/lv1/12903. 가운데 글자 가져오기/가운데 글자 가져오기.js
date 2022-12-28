function solution(s) {
    let splits = s.split('');
    let answer = [];
    if(splits.length % 2 === 0){
        answer.push(splits[splits.length/2 -1],splits[splits.length/2 ]);
        console.log(answer,"::answer");
    }else{
        answer.push(splits[Math.floor(splits.length/2)])
        
    }
    return answer.join('');
}