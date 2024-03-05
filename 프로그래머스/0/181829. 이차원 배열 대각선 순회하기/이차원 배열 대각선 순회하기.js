function solution(board, k) {
    const answer = board.reduce((acc, row, i) => {
        const rowSum = row.reduce((rowAcc, cur, j) => {
            if (i + j <= k) {
                console.log(cur, 'cur');
                return rowAcc + cur;
            }
            return rowAcc;
        }, 0);
        
        return acc + rowSum;
    }, 0);

    return answer;
}
