function solution(array, n) {
    let answer = array[0] ;
   for(let i = 1; i < array.length; i++) {
        // 현재 값과 이전에 선택한 값과의 차이를 비교하여 더 가까운 값을 선택
        if(Math.abs(n - array[i]) < Math.abs(n - answer)) {
            answer = array[i];
        } else if (Math.abs(n - array[i]) === Math.abs(n - answer)) {
            // 만약 두 값의 차이가 같다면 더 작은 값을 선택
            answer = Math.min(answer, array[i]);
        }
    }
    return answer;
}