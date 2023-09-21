function solution(my_string) {
    
    
    
    return my_string.split('').filter((num) => !isNaN(Number(num))).map((num) =>  Number(num)).reduce((a,b) => a + b + 0 );
}