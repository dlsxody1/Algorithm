function solution(n) {
    return Array(n).fill('_').map((_,i) => i + 1).filter((num, i) => i % 2 === 0);
}