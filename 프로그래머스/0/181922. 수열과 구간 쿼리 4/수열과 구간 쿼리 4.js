function solution(arr, queries) {
    var answer = [];
    queries.forEach((el,i) => {
        const [s, e, k] = el;
        for(let z = s ; z <= e ; z++){
            if(z % k === 0){
                arr[z]++;
            }
                
        }  
    })
    return arr;
}


