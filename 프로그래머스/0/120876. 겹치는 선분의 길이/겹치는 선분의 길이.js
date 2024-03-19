function solution(lines) {
    let points = [];
    lines.forEach(([start, end]) => {
        points.push({ position: start, type: 'start' });
        points.push({ position: end, type: 'end' });
    });

    // 위치에 따라 오름차순으로 정렬
    points.sort((a, b) => a.position - b.position);

    let overlappingLength = 0;
    let activeSegments = 0;
    let lastStart = null;

    points.forEach(({ position, type }) => {
        if (type === 'start') {
            if (activeSegments === 1) {
                // 이미 하나의 선분이 활성화된 상태에서 시작점을 만났으므로, 겹치는 부분이 시작됩니다.
                lastStart = position;
            }
            activeSegments += 1;
        } else { // 'end'
            activeSegments -= 1;
            if (activeSegments === 1) {
                // 하나의 선분이 끝났지만 여전히 다른 선분이 활성화되어 있으므로, 겹치는 부분이 끝납니다.
                overlappingLength += position - lastStart;
                lastStart = null;
            }
        }
    });

    return overlappingLength;
}