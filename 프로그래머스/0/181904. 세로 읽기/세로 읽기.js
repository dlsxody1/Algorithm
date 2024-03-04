function solution(my_string, m, c) {
    if(m === 1 && c === 1) return my_string
    
    let answerArr = [];
    const splitString = my_string.split('');
    for(let i = 0; i < splitString.length ; i += m){
        answerArr.push(splitString.slice(i,m+i));
    }
    
    
        
    
    return answerArr.map((el,i) => {
        return el[c-1]
    }).join('')
    ;
}