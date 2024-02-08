function solution(my_string, is_suffix) {
    const charArr = my_string.split('');
    const answer = [];
    charArr.forEach((el,i) => {
       answer.push(charArr.slice(i).join(''));
   });
   return answer.includes(is_suffix) ? 1 : 0
}