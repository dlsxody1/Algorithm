function solution(my_string) {
    
    return my_string.split('').map((el) => {
        if(el.charCodeAt() > 93){ return el.toUpperCase()}
        else{return el.toLowerCase(); }
    }).join('');
}