function solution(n) {
    // n x n 배열 초기화
    const array = Array.from({ length: n }, () => Array(n).fill(0));
    let number = 1;
    let row = 0;
    let col = 0;
    let direction = 0; // 0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (number <= n * n) {
        // 현재 위치에 숫자 배치
        array[row][col] = number++;
        // 다음 위치 계산
        let nextRow = row + directions[direction][0];
        let nextCol = col + directions[direction][1];
        // 다음 위치가 배열 범위를 벗어나거나 이미 채워진 경우 방향 전환
        if (nextRow >= n || nextRow < 0 || nextCol >= n || nextCol < 0 || array[nextRow][nextCol] !== 0) {
            direction = (direction + 1) % 4;
            nextRow = row + directions[direction][0];
            nextCol = col + directions[direction][1];
        }
        row = nextRow;
        col = nextCol;
    }

    return array;
}