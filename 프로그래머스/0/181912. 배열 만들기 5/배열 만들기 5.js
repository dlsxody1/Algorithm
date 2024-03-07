function solution(intStrs, k, s, l) {
    return intStrs.map((el) => {
        return Number(el.substring(s, s+l))
    }).filter((el) => el > k);
}