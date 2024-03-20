function solution(numlist, n) {
    
    numlist.sort((a,b) => {
        const pre = Math.abs(n-a);
        const post = Math.abs(n-b)
        if(pre < post){
            return -1
        }else if(pre > post){
            return 1
        }else{
            return b-a 
        }  
    });
    
    return numlist
}