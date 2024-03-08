function solution(q, r, code) {
    var answer = '';
    let i = 0 ;
    for(const str of code){
        if(i % q === r){
            answer += str;
            
        }
        i++;
    }
    return answer;
}