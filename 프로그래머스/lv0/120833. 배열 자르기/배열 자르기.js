function solution(numbers, num1, num2) {
    //새로운 배열 객체 반환
    var answer = numbers.slice(num1,num2+1);
    return answer;
}