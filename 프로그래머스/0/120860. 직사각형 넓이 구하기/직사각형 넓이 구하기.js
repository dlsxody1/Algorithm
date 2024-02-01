// function solution(dots) {
    
//     const row  = dots[0][0] < 0 || dots[0][1] < 0 ? Math.abs(dots[0][0]) + Math.abs(dots[1][0]) : Math.max(dots[0][0],dots[1][0]) - Math.min(dots[0][0],dots[1][0]);
//     const column = dots[0][1] < 0 || dots[1][1] < 0 ?  : Math.abs(dots[0][1]) + Math.abs(dots[1][1]) Math.max(dots[1][0],dots[1][1]) - Math.min(dots[0][0],dots[1][0]);
    
//     return row * column;
// }


function solution(dots) {
    // 각 좌표에서 x, y 좌표를 분리
    const xValues = dots.map(point => point[0]);
    const yValues = dots.map(point => point[1]);

    // x 좌표의 최솟값과 최댓값을 찾아 변의 길이 계산
    const row = Math.abs(Math.max(...xValues) - Math.min(...xValues));
    
    // y 좌표의 최솟값과 최댓값을 찾아 변의 길이 계산
    const column = Math.abs(Math.max(...yValues) - Math.min(...yValues));

    // 넓이 계산 후 반환
    return row * column;
}