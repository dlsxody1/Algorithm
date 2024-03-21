function solution(i, j, k) {
    var answer = 0;
    for(let a = i ; a <= j ; a++){
        const splitA =  a.toString().split('');
          for(let z = 0 ; z < splitA.length ; z++){
              if(splitA[z] == k){
                  answer++;
              }
        }
    }
    return answer;
}