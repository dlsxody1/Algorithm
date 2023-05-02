function solution(t, p) {
    var answer = [];
    let leng = p.length;
    let i = 0;
    
    for(leng; leng < t.length+1 ; leng++){
        answer.push(t.substring(i,leng));
        i++;
    }
    
   let realAnswer = answer.filter(num => num <= p ).length;
    console.log(realAnswer)
    return realAnswer;
}