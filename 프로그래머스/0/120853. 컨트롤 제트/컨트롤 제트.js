function solution(s) {
    const elements = s.split(' ');

    const answer = elements.reduce((acc, cur, index) => {
        if (cur === 'Z') {
            const prevIndex = index - 1;
            if (prevIndex >= 0 && elements[prevIndex] !== 'Z') {
                return acc - parseInt(elements[prevIndex]);
            }
        } else {
            return acc + parseInt(cur);
        }
        return acc; 
    }, 0);

    return answer;
}