function solution(answers) {
    
    //1번 수포자 1-5 순서대로
     //2번 21232 24252 12324 25
    //3번 3311224455 3311224455   
    //패턴을 만들려고 시도 했으나 굳이 그럴 필요 없었다.
//     let count = 1;
//     let numberOne = [];
//     let numberTwo = [];
//     let numberThree = [];
//     while(conut > 6){
//         count++;
//         numberOne.push(count);
        
//         if(count > 5){
//             count = 0;
            
//         }
//     }
    
  var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};
    return answer;
}