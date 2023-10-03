function solution(citations) {
   let answer = 0
    citations.sort((a,b) => b-a);
    citations.forEach((cit,i) => {
        if(i < cit){
            answer++;
        }
    })
    return answer;
}