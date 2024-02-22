function solution(arr) {
    
    return  arr.map((el) => {return Array(el).fill(el)}).flatMap(el => el);
}