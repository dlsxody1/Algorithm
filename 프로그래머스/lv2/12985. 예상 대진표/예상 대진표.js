function solution(n, a, b) {
    if (n % 2 !== 0) return 0;
    
    let answer = 0;

    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}