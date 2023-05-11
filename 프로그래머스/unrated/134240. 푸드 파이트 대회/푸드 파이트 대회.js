function solution(food) {
    var answer = '';
    for(let i = 1 ; i < food.length + 1 ; i++){
        if(food[i] % 2 === 0){
            for(let j = 1 ; j < food[i]/2 + 1 ; j++){
                answer += i;
            }
        }else if(food[i] % 2 ==! 0){
            for(let j = 1 ; j < parseInt(food[i]/2 + 1) ; j++){
                answer += i;
            }
        }
    }
    let realAnswer = answer + '0' + answer.split('').reverse().join('');
    
    return realAnswer;
}