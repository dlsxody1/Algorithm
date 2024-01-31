 function solution(answers) {
    var answer = [];
     var a1 = [1, 2, 3, 4, 5];
     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
     var max = Math.max(a1c,a2c,a3c)
     if (a1c === max) {answer.push(1)};
     if (a2c === max) {answer.push(2)};
     if (a3c === max) {answer.push(3)};
     return answer;
 }


// function solution(answers){
//     const answer = [];
//     const one = [1 ,2 ,3 ,4 ,5];
//     const two = [2, 1, 2, 3, 2, 4, 2, 5];
//     const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
//     const maxWay = (arr) => {
//         return answers.filter((ques,i) => ques === arr[i]).length;
//     }
//     const maxArr = [maxWay(one), maxWay(two), maxWay(three)];
    
//     if(maxArr[0] > maxArr[1] && maxArr[0] > maxArr[2]) return [1];
//     if(maxArr[1] > maxArr[0] && maxArr[1] > maxArr[2]) return [2];
//     if(maxArr[2] > maxArr[0] && maxArr[2] > maxArr[1]) return [3]; 
    
// }