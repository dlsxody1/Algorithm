function removeZero(str) {
    let count = 0;
    const newStr = str.split('').filter(char => {
        if (char === '0') {
            count++;
            return false;
        }
        return true;
    }).join('');
    return [newStr, count];
}

function solution(s) {
    let answer = [0, 0]; 
    let str = s;

    while (str !== "1") {
        const [newStr, count] = removeZero(str); 
        const len = newStr.length.toString(2); 

        answer[0]++;
        answer[1] += count;

        str = len; 
    }

    return answer;
}