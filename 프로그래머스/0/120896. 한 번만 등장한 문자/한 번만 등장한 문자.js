function solution(s) {
    var answer = '';
    const sMap = [...new Set(s.split(''))].map((el) => {
        return {str : el , count : 0}
    });
    
    s.split('').forEach((el) => {
       sMap.forEach((item) => {
           if(el === item.str){
               item.count++;
           }
       })
    })
    
    const uniqueChars = sMap.filter((item) => item.count === 1).map((item) => item.str);
    answer = uniqueChars.sort().join('');
    return answer;
}