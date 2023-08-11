function solution(A,B){
    //A,B 는 길이가 같은 배열, 원소는 자연수
    //배열의 길이만큼 각각 한 개의 숫자를 뽑아 두 수를 곱한다 
    //두 수를 곱한 값을 누적하여 더한다.
    //최종적으로 누적된 값이 최소가 되도록 만든다.
    var answer = 0;
    const sortA = A.sort((a, b) => a - b); 
    const sortB = B.sort((a, b) => b - a); 
    
    for(let i = 0 ; i < A.length ; i++){
        answer += sortA[i] * sortB[i];
    }
    console.log(answer);
    
    return answer;
  
}