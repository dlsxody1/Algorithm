function solution(sizes) {
    let indexOne = [];
    let indexTwo = [];
    
    sizes.map((el) => {
        el.sort((a,b) => {
           return  a-b
        });
        indexOne.push(el[0]);
        indexTwo.push(el[1]);
    })
    
    let wMax = Math.max(...indexOne);
    let hMax = Math.max(...indexTwo); 
   
    let answer = wMax * hMax;
    
    return answer;
}