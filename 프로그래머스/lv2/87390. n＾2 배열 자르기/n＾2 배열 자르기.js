function solution(n, left, right) {
   var answer = [];
    
    //이 두 값을 비교하여 더 큰 값을 선택하고, 1을 더하여 1부터 시작하는 인덱스로 변환
    while(left <= right){
        //left / n 행 left % n 열
        //rigth / n 행 right % n 열
        answer.push(Math.max(Math.floor(left / n), left % n) + 1);
        left++;
    }
    return answer 
}