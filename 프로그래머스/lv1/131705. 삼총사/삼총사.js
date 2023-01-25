function solution(number) {
    
    let arr = [];
    let getNumber = 0;
    for(let i = 0; i < number.length ; i++ ){
      for(let j = i+1; j < number.length ; j++ ){
          for(let k = j+1; k < number.length ; k++ ){
             getNumber = number[j] + number[k] + number[i];
              
              arr.push(getNumber);
          }
      }
        
      }
    let answer = arr.filter((el) => el === 0).length
    
    return answer;
}