function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach((num) => {
        if(num % 2 === 0){
            odd += num.toString();
        }else if(num % 2 !== 0){
            even += num.toString();
        }
    })
    

    return Number(odd) + Number(even);
}