function solution(n) {
    let newArr  = Array(n).fill(0).map((el, index) => {
    if(index % 2 === 0 ){
            return index
        }
    }).filter((el) => el !== undefined)
    console.log(newArr);
    
    let answer  = 0;
    for(let i = 0 ; i <= n ;i += 2){
        answer += i;
    }
    console.log(answer);
    
    return answer;
   
}