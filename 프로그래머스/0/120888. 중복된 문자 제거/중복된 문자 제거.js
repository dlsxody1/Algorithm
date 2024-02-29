function solution(my_string) {
    const mystring = my_string.split('')
    const set = new Set(mystring);
    const deleteDup = [...set];
    
    
    return deleteDup.join('')
}