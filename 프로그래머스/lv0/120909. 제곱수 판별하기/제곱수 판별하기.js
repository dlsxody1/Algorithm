function solution(n) {
    var answer = Math.sqrt(n).toString();
    
    return answer.indexOf('.') === -1 ? 1 : 2;
}