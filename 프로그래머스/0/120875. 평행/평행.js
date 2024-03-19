function solution(points) {
    // 가능한 세 가지 쌍의 조합: [0, 1, 2, 3] -> [a-b, c-d], [a-c, b-d], [a-d, b-c]
    const pairs = [[[0, 1], [2, 3]], [[0, 2], [1, 3]], [[0, 3], [1, 2]]];
    
    for (let i = 0; i < pairs.length; i++) {
        const firstPairIncline = inclination(points[pairs[i][0][0]], points[pairs[i][0][1]]);
        const secondPairIncline = inclination(points[pairs[i][1][0]], points[pairs[i][1][1]]);
        
        // 두 직선이 평행한지 검사
        if (firstPairIncline === secondPairIncline || (isInfinite(firstPairIncline) && isInfinite(secondPairIncline))) {
            return 1; // 평행하다면 1 반환
        }
    }
    return 0; // 평행한 쌍을 찾지 못했다면 0 반환
}

function inclination(p1, p2) {
    // 분모가 0인 경우를 대비하여 무한대 처리
    if (p2[0] === p1[0]) return Infinity;
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

function isInfinite(value) {
    return value === Infinity || value === -Infinity;
}