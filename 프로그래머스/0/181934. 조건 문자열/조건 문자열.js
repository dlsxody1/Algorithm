function solution(ineq, eq, n, m) {
    return eq === '!' ? Number(ineq === '>' ? n > m : n < m) : Number(ineq === '>' ? n >= m : n <= m)
}