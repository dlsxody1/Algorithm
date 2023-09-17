function solution(my_string, n) {
    
    
    return my_string.split('').map((str) => {
        return str.repeat(n);
    }).join('');
}