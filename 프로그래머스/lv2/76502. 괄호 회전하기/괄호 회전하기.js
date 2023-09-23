function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (char in brackets) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (brackets[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isBalanced(rotated)) {
            count++;
        }
    }
    return count;
}