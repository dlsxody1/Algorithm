function solution(n_str) {
    let answer = n_str;
    for (let i = 0; i < answer.length; i++) {
        if (answer[0] !== "0") {
            console.log(answer);
            return answer;
        } else {
            if (answer[i] === "0") {
                answer = answer.slice(1);
                i--;
            } else {
                break;
            }
        }
    }
    return answer;
}