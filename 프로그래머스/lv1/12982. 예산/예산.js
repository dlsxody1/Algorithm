function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d = d.sort((a,b) => {
        return a-b;
    })
        // 배열 요소의 합이 budget보다 작은 최대 개수를 리턴하면 됨.
    for(let i = 0 ; i < d.length ; i++){
        sum += d[i];
        if(sum <= budget){
            answer++;
        }else{
            break
        }
        
    }
    return answer;
}