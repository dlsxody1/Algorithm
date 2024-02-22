function solution(a, b) {
    
    return a.toString() + b.toString() > (2 * a * b) ? Number(a.toString() + b.toString()) : (2 * a * b);
}