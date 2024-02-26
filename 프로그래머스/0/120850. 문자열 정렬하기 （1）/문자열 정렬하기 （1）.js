function solution(my_string) {
    var answer = [];
    for(const str of my_string){
        if(!isNaN(str)) answer.push(Number(str));
    }
    return answer.sort();
}