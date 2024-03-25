function solution(arr) {
    const length = arr.length;
    
    // 현재 배열의 길이를 2의 정수 거듭제곱으로 만들기 위해 필요한 0의 개수 계산
    const zerosToAdd = Math.pow(2, Math.ceil(Math.log2(length))) - length;

    // 0의 개수만큼 0을 추가한 배열 반환
    return arr.concat(Array(zerosToAdd).fill(0));
}