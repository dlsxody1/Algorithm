function solution(age) {
    return age.toString().split('').map((el) => {
        return String.fromCharCode(Number(el) + 97);
    }).join('')
}