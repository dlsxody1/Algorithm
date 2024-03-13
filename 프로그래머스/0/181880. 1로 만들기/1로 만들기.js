function solution(num_list) {
    return num_list.map((el) => {
        return makeOne(el)
    }).reduce((acc, cur) => acc + cur + 0);
    
}

function makeOne(num){
    let result = 0;
      while(num > 1){
        if(num % 2 === 0){
            num /= 2;
            result++;
        }else{
            num = (num - 1)/2
            result++;
        }
    }
    
    return result
}