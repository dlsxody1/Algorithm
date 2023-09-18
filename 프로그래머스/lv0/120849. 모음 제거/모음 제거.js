function solution(my_string) {
    return my_string.split('').filter((str) => {
         if (!['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase())) {
      return str;
    }
    }).join('');
}