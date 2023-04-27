
function solution(n) {
    let answer = [];
    
    function recursion(k){
         if(parseInt(k) === 0){ 
            return k;
        }else{
            answer.push(k%3);
            recursion(parseInt(k/3));
        }
    }
    recursion(n);
    
    let last = answer.reverse().map((el, i) => {
        return parseInt(el) * Math.pow(3, i);
    }).reduce((acc, cur) => acc + cur, 0); 
    console.log(last);   
    return last;
}