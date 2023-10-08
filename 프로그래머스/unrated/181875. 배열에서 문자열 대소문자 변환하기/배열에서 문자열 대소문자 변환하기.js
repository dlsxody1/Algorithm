function solution(strArr) {
    return strArr.map((str,i) => {
        if((i+1) % 2 !== 0) {return str.toLowerCase();}
        else{return str.toUpperCase()}
    })
}