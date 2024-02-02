// function solution(my_string, queries) {
//     var answer = '';
//     const my_string_arr = my_string.split('');
//     for(let i = 0 ; i < queries.length ; i++){
//         const reverseStr = my_string.substring(queries[i][0], queries[i][1]+1).split('').reverse('').join('');
//         my_string_arr.splice(queries[i][0],queries[i][1], reverseStr);
//     }
//     return answer;
// }

function solution(my_string, queries) {
    var answer = my_string;
    const my_string_arr = answer.split('');
    
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        const reversedStr = my_string_arr.slice(start, end + 1).reverse().join('');
        my_string_arr.splice(start, end - start + 1, ...reversedStr.split(''));
    }
    
    return my_string_arr.join('');
}