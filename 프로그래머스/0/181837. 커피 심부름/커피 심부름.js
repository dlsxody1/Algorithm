function solution(order) {
    var answer = 0;
    order.forEach((el) => {
        if(el.includes("americano")){ answer += 4500}
        else if(el.includes("cafelatte")){ answer += 5000}
        else if(el === 'anything'){ answer += 4500 }
    })
    return answer;
}