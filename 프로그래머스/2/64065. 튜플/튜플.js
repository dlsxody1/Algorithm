function solution(s) {
    var answer = [];
    //s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"
    let tuple = s.slice(2,-2).split('},{').map(str => str.split(',').map(Number));
    tuple.sort((a,b) => a.length - b.length);
    tuple.forEach((arr) => {
        arr.forEach((num) => {
            if(!answer.includes(num)) answer.push(num)
        })
    })
    
    
    console.log(answer);
    //순서가 지켜져야 한다.. 중복제거를
    return answer;
    
}