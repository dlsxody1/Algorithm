function solution(numbers) {
    let answer = numbers;
    const stringToNumber = {
        0 : 'zero',
        1 : 'one' ,
        2 : 'two' ,
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 :  'six' ,
        7 : 'seven',
        8 : 'eight',
        9 : 'nine'
    }
    
    let i = 0;
    while(true){
        answer = answer.replaceAll(stringToNumber[i],i);
        console.log(answer);
        i++;
        if(i > 9){ break };
        if(!isNaN(answer)){
            break;
        }
    }
    return Number(answer);
}