// function solution(numbers) {
//     var answer = '';
//     //앞자리를 비교해 가장 큰 것을 맨 앞 자리에 둔다. & join('')
//     //앞자리가 같다면 뒤에 있는 수가 더 클 때... 
//     console.log(numbers.map((el) => el.toString()).sort((a,b) => {
//         if(a[0] === b[0]){
//             return b-a;
//         }else{
//             return b[0] - a[0];
//         }
//         }))
//     return answer;
// }


function solution(numbers) {
    const checkZero = numbers.reduce((acc,cur) => acc+cur+0);
    return checkZero === 0 ? '0' : numbers.sort((a,b) => { 
        const order1 = `${a}${b}`;
        const order2 = `${b}${a}`;
        return order2 - order1;
    }).join('')
}