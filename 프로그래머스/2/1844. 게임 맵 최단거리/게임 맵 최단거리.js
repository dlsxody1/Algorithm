function solution(maps) {
    let result = 0;
    const visited = Array(maps.length).fill(0).map(() => Array(maps[0].length).fill(0));
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const q = [];
    q.push([0, 0]);
    visited[0][0] = 1;

    // 시작점과 도착점이 벽으로 막혀있는 경우
    if (maps[maps.length - 1][maps[0].length - 2] === 0 && maps[maps.length - 2][maps[0].length - 1] === 0) return -1;

    while (q.length) {
        const [y, x] = q.shift();

        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];

            // 범위를 벗어나거나 벽인 경우 무시
            if (ny < 0 || nx < 0 || ny >= maps.length || nx >= maps[0].length || maps[ny][nx] === 0) continue;

            // 이미 방문한 곳인 경우 무시
            if (visited[ny][nx]) continue;

            // 이동한 좌표를 큐에 추가하고 이동 거리를 기록
            q.push([ny, nx]);
            visited[ny][nx] = visited[y][x] + 1;
        }
    }

    result = visited[maps.length - 1][maps[0].length - 1];

    // 도착점에 도달할 수 없는 경우
    if (!result) return -1;

    return result;
}