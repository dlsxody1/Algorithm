function solution(A, B) {
    if (A === B) return 0;

    let count = 0; 
    const length = A.length; 

    for (let i = 0; i < length; i++) {
        // A를 오른쪽으로 한 칸 밀기: 마지막 문자를 맨 앞으로, 나머지 문자들을 오른쪽으로 한 칸씩 이동
        A = A[length - 1] + A.substring(0, length - 1);
        count++; 
        if (A === B) return count;
    }

    
    return -1;
}