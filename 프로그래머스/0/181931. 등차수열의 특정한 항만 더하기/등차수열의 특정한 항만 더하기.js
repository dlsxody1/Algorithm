function solution(a, d, included) {
    var answer = 0;
    
    return included.map((el,i) =>{
        return el === true ? Number(a+(i*d)) : 0
    }).reduce((acc, cur) => acc + cur + 0);
}