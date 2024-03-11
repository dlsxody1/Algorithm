function solution(arr) {
  let start = -1;
  let end = -1;
  
  // 배열에서 2의 첫 번째 등장 위치 찾기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      start = i;
      break;
    }
  }
  
  // 배열에서 2의 마지막 등장 위치 찾기
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      end = i;
      break;
    }
  }
  
  // 2가 없는 경우 [-1] 반환
  if (start === -1 || end === -1) {
    return [-1];
  }
  
  // 부분 배열 추출
  const result = arr.slice(start, end + 1);
  
  return result;
}