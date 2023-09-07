function solution(array) {
    let copyArr = array.sort((a, b) => a - b);
    
    return copyArr[Math.floor(array.length/2)];
}