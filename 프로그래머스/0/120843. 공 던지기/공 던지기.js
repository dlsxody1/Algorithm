function solution(numbers, k) {
    let len = numbers.length;    
    return numbers[2*(k-1)%len];
}