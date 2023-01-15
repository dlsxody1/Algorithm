function solution(s, n) {
    
    let splits = s.split('').map((el) => {
        if(el === " ") return el;
        let tmp = el.charCodeAt();
        
        return el.toLowerCase().charCodeAt() + n > 122 
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n)
        
        
    }).join("");
    
    console.log(splits);
    return splits;
    
     
}