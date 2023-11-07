function solution(n, t, m, p) {
    var answer = '';
    const baseN = Array(t * m).fill('_').map((_,i) => {
        return (i).toString(n).toUpperCase();
    }).join('').split('');
    
    for(let i = p -1 ; i < t * m; i+= m){
            answer += baseN[i];    
        
    }
    console.log(baseN);
    return answer.slice(0,t);
}