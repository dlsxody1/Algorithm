//최대 공약수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(a, b) {
    let answer = 0;
    
    const commonDivisor = gcd(a,b);
    let denominator = b / commonDivisor;
    
    // 분모가 2와 5로만 이루어져 있는지 확인
    while (denominator % 2 === 0) {
        denominator /= 2;
    }
    while (denominator % 5 === 0) {
        denominator /= 5;
    }
    
    
    return denominator === 1 ? 1 : 2;
}