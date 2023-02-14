function solution(s){
    var answer = true;
    let count = 0;
    //개수가 동일하나 틀린 case를 찾자. ())(()
    if(s[s.length-1] === '(' || s[0] === ')'){
        return false;         
        }
        
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '('){
          count++;  
        } 
        else if(s[i] === ')'){
          count--;
            if(count < 0){
                
                break;
            }
        }
        
    }
    if(count === 0){
        answer = true;
    }else{
        answer = false;
    }
//     let answer = true;
//     let stack = [];
    
//     for(let i = 0; i < s.length ; i++){
//         if(s[i] === '('){
//             stack.push(s[i]);
//         }else if(s[i] === ')'){
//             if(stack.length === 0){
//                 answer = false;
//                 break;
//             }
//             stack.pop();
//         }
//     }
//     if(stack.length !== 0){
//         answer  = false;
//     }
//     return answer;
    return answer
}