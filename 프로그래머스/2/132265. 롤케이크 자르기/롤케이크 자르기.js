// function solution(topping) {
//     var answer = 0;
//     let me = new Set();
//     let bro = new Set(topping);
    
//     for(let i = 0 ; i < topping.length ; i++){
//         let me = new Set(topping.slice(0, i+1))
//         let bro = new Set(topping.slice(i+1, topping.length));
        
//         if(me.size === bro.size){
//             answer++;
//         }
//     }
    
//     return answer;
// }


function solution(topping) {
   const right = new Map()
   const left = new Map()
   
   for (const t of topping) {
       if (right.get(t)) right.set(t , right.get(t)+1)
       else right.set(t,1)
   }

    let ret = 0
   for (const t of topping) {
       if (right.get(t)>1) right.set(t, right.get(t)-1)
       else right.delete(t)
       
       if (left.get(t)) left.set(t , left.get(t)+1)
       else left.set(t,1)
       
       if (left.size === right.size) ret++
   }
    
    return ret
}

