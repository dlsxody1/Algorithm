function solution(my_string, s, e) {
    var answer = '';
    let reverseStr = my_string.substring(s  , e+1).split('').reverse()
    console.log(reverseStr)
    const splits = my_string.split('');
    for(let i = s ; i <= e ; i++){
        splits[i] = reverseStr[i - s];
    }
    
    return splits.join('');
}