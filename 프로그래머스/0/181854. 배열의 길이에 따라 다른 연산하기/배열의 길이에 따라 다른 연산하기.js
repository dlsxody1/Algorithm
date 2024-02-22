function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((el,i) => { 
        if(i % 2 !== 0){return el + n}
        else{return el}
    })
    : arr.map((el,i) => { 
        if(i % 2 === 0){return el + n}
        else{return el}
    })
}