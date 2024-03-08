function solution(my_string, indices) {
    var answer = '';
    const splits = my_string.split('')
    for(let i = 0 ; i < indices.length ; i++){
        splits[indices[i]] = ""
    }
    return splits.join('');
}