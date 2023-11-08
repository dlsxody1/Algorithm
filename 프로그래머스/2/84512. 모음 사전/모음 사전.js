function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    //첫 번째 자리에는 5^4 두 번째는 5^3....마지막은 5^0의 단어
    let per = [781, 156, 31, 6, 1];
    for (let i = 0; i < word.length; i++) {
        //해당 알파벳의 순서를 찾아 per 배열의 해당 인덱스 값과 곱하고 1을 더한다. A = 1 이기 때문
        answer += per[i] * alphabets.indexOf(word[i]) + 1;
    }
    return answer;
}