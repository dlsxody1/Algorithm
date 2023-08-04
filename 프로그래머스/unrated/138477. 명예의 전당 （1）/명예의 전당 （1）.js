function solution(k, score) {
    //길이가 k인 배열의 최솟값을 answer에 push한다.
    //k일차를 넘었을 때 배열의 원소중에 score보다 작은 값이 있을 때 가장 작은값과 큰 값을 교체한다.
    //score 보다 작은 값이 없을 경우에는 교체하지 않고 배열의 가장 작은 값을 리턴한다.
    
    var answer = [];
    let honor = [];
    
    
    for(let i = 0 ; i < score.length ; i++){
         if (answer.length < k) {
            honor.push(score[i]);
            honor.sort((a, b) => a - b);
            answer.push(honor[0]);
        } else if (answer.length >= k && score[i] > honor[0]) {
            // 배열의 가장 작은 값을 지우고 큰 값으로 바꾸고 sort한다.
            honor.shift(); // 가장 작은 값을 제거
            honor.push(score[i]); // 큰 값으로 바꾸기
            honor.sort((a, b) => a - b);
            answer.push(honor[0]);
        } else {
            answer.push(honor[0]);
        }
    }
    
    
    
    return answer;
}