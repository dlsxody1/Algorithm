function solution(myString) {
    return myString.split('x').filter((el) => el.length > 0).sort()
}