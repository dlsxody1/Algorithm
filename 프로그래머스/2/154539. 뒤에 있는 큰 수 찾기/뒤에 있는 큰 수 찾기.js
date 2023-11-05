function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1); // 결과를 저장할 배열 초기화
    const stack = []; // 인덱스를 저장할 스택

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const idx = stack.pop();
            answer[idx] = numbers[i];
        }
        stack.push(i);
    }

    return answer;
}