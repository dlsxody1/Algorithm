function solution(start, end_num) {
    
    return Array(start-end_num+1).fill('_').map((_,i) => i+end_num).reverse();
}