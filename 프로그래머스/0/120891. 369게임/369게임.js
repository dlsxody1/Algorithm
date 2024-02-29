function solution(order) {
    const orderArr = order.toString().split('');
    let answer = 0;
    for(let i = 0 ; i < orderArr.length ; i++){
        if(orderArr[i] === '3' || orderArr[i] === '6' || orderArr[i] === '9'){
            answer++;
        }
    }
    return answer;
}