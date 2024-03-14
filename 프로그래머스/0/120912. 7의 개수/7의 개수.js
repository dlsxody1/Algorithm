function solution(array) {
    var answer = 0;
    const arrayJoin = array.join('').split('');
    arrayJoin.forEach((el) => {
        if(el == 7) answer ++;
    })
    
    return answer;
}