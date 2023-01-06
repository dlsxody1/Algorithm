function solution(numbers) {
    let answer =numbers.reduce((a,b) => a + b + 0) / numbers.length;
    
    console.log(answer);
    return answer;
}