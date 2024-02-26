function solution(myString) {
    return myString.split('').map((el)=> {
        if(el <= 'l'){
           return el = 'l'
        }else{
            return el
        }
    }).join('');
}