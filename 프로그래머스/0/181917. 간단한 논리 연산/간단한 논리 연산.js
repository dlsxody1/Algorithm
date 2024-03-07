function solution(x1, x2, x3, x4) {
    var answer = true;
    return Boolean((x1 | x2) && (x3 | x4));
}