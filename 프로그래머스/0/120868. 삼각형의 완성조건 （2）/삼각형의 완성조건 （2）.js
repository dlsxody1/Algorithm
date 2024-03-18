function solution(sides) {
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    
    
    return (max + min - 1) - (max - min + 1) + 1;
}