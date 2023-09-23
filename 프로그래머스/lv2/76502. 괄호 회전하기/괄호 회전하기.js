function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    
    for (let char of s) {
        //객체의 여는 괄호 인지 확인
        //여는 괄호이면 push
        if (char in brackets) {
            stack.push(char);
        } else {
            //가장 최근에 push된 여는 괄호를 꺼냄
            const top = stack.pop();
            // 올바르게 닫히지 않은 경우 false를 반환
            if (brackets[top] !== char) {
                return false;
            }
        }
    }

    //올바른 여는 괄호들이 닫혔으면 true를 반환
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        //왼쪽으로 회전
        const rotated = s.slice(i) + s.slice(0, i);
        //true일 때 count 증가
        if (isBalanced(rotated)) {
            count++;
        }
    }
    return count;
}