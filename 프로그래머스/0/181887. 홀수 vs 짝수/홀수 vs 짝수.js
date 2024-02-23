function solution(num_list) {
    let odd = 0;
    let even = 0;
        
    num_list.forEach((el, i) => {
        if(i % 2 === 0){
            odd += el;
        }else{
            even  += el
        }
    })
    
    return odd > even ? odd : even
}