function solution(balls, share) {
    //조합은 서로 다른 n개 중에 r개를 선택하는 경우의 수이다. 순서는 중요하지 않다.
    //nCr  = n! / (n-r)! * r!
    //팩토리얼 계산시 크기가 커질 수 있기 떄문에 BigInt를 사용한다.
    let factorial = [BigInt(1)];
    for (let i = 1; i <= balls; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
        console.log(factorial[i] = factorial[i - 1] * BigInt(i))
    }
    
    return factorial[balls] / (factorial[balls-share] * factorial[share])
}