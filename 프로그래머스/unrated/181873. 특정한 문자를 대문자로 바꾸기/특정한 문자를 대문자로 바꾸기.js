function solution(my_string, alp) {
     while (my_string.indexOf(alp) !== -1) {
        const strIndex = my_string.indexOf(alp);
        my_string = my_string.substring(0, strIndex) + alp.toUpperCase() + my_string.substring(strIndex + 1);
    }
    
    return my_string;
}