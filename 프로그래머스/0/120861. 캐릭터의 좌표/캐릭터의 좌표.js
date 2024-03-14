function solution(keyinput, board) {
    var answer = [0, 0];
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);

    const vector = {
        "up": (arr) => { if (arr[1] < maxY) arr[1]++; },
        "down": (arr) => { if (arr[1] > -maxY) arr[1]--; },
        "left": (arr) => { if (arr[0] > -maxX) arr[0]--; },
        "right": (arr) => { if (arr[0] < maxX) arr[0]++; },
    }

    keyinput.forEach((el) => {
        vector[el](answer);
    });

    return answer;
}