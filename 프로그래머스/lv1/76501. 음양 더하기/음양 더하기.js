function solution(absolutes, signs) {
    
   let answer =  absolutes.map((el,i) => {
        if(signs[i] === false) {
            return -el;
        }else{
            return el
        }
            
    })
   
   console.log(answer);
   
    return answer.reduce((a,b)=> (a+b));
}