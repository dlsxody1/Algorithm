function solution(n, m) {
    let max = (a, b) => a%b===0 ? b : max(b, a%b);
    let gcd = max(n,m);
    return [gcd, n*m/gcd];
}