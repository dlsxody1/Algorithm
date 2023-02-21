function solution(n) {
    
//     let binary = n.toString(2).split('');
//     let i = n+1;
//     let binaryCount = binary.map((el) => {
//         return el === '1'
//     }).length;
//     let iCount = i.toString(2).split('').map((el) => {
//         return el === '1'
//     }).length;
//     let answer = 0;
//     while(true){
        
//         if(i.toString(2) >= n.toString(2) && binaryCount === iCount){
//             answer = parseInt(n.toString(2),2);
//             break;
//         }else{
//             i++;
//         }
//     }
//     return answer;
   
    let arr = n.toString(2).split('');
    let count = arr.filter((one) => one === '1').length;
    let count2;
    while (count !== count2){
        ++n;
        count2 = n.toString(2).split('').filter((one) => one === '1').length;
    }
    return n;
}