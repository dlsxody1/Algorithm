function solution(board) {
    let n = board.length;
    let safeAreaCount = n * n; // 전체 칸 수에서 위험 지역을 빼서 안전 지역을 계산할 예정입니다.

    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // 위쪽 3칸
        [0, -1], [0, 1], // 좌우
        [1, -1], [1, 0], [1, 1] // 아래쪽 3칸
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                safeAreaCount--; // 지뢰 칸 자체도 안전 지역이 아님
                directions.forEach(([dx, dy]) => {
                    const newX = i + dx;
                    const newY = j + dy;
                    if (newX >= 0 && newX < n && newY >= 0 && newY < n && board[newX][newY] === 0) {
                        board[newX][newY] = -1; // 지뢰에 인접한 안전 지역을 위험 지역으로 표시합니다. (이미 표시된 칸은 다시 세지 않기 위해 -1로 표시)
                    }
                });
            }
        }
    }

    // 위험 지역(-1로 표시된)의 수를 세어 안전 지역의 수를 조정합니다.
    board.forEach(row => {
        row.forEach(cell => {
            if (cell === -1) safeAreaCount--;
        });
    });

    return safeAreaCount;
}