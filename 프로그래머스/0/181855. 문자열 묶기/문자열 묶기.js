function solution(strArr) {
    
    const strMap = new Map();
    
    for(let i = 0 ; i < strArr.length ; i++){
        let len = strArr[i].length;
        if (!strMap.has(len)) {
            strMap.set(len, []);
        }
        //map에다 빈배열을 넣고, 같은 key를 가진 strArr[i] 를 push
        strMap.get(len).push(strArr[i]);
    }
    
    let maxGroupSize = 0;
    console.log(strMap)
    for (let group of strMap.values()) {
        console.log(group)
        maxGroupSize = Math.max(maxGroupSize, group.length);
    }
    return maxGroupSize;
}