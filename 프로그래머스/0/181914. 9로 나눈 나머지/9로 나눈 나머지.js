function solution(number) {
    const numberSum = number.split('').reduce((acc,cur) => +acc + +cur + 0);
    return numberSum%9;
}