function solution(arr) {
    var answer = [...arr]
    let count = 0;

    while(true){
      count++
      const calculate = answer.map(el => {
        if(el >= 50 && el%2 === 0){
            return el / 2
        }else if(el < 50 && el%2 === 1){
            return (el * 2)+1
        }else return el
      })

      if(calculate.toString() === answer.toString()){
          return count - 1;
          break;
      } else{
          answer = calculate
      }
    }
}