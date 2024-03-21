function solution(common) {
    const length = common.length
    let diff1 = common[1] - common[0];
    let diff2 = common[2] - common[1];
    
    return diff1 === diff2 ? common[length - 1] + diff1 : common[length-1] * (common[1]/common[0]);
}