function solution(n, control) {
    var answer = n;
    for (let i = 0; i < control.length ; i++) { 
        if (control[i] === 'w') answer++;
        if (control[i] === 's') answer--;
        if (control[i] === 'd') answer += 10;
        if (control[i] === 'a') answer -= 10;
    }
    return answer;
}