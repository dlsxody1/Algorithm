function solution(num_list) {
    var answer = [0,0];
    num_list.forEach((num) => {
        if(num % 2 === 0 ) return answer[0] += 1
        else return answer[1] += 1
    })
    return answer;
}