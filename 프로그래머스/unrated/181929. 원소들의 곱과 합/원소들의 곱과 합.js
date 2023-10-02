function solution(num_list) {
    let multi = num_list.reduce((acc, cur) => acc * cur + 0);
    let powpow = num_list.reduce((acc, cur) => acc + cur + 0);
    let square = Math.pow(powpow, 2);
    
    return square > multi ? 1 : 0
}