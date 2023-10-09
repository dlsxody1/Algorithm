function solution(clothes) {
  const clothesMap = new Map();

  // clothes 배열을 순회하면서 각 의상의 종류를 key로 하여 Map에 개수를 누적
  for (const [_, type] of clothes) {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else {
      clothesMap.set(type, 1);
    }
  }

  // 각 의상의 개수를 이용하여 조합의 수를 계산
  let answer = 1;
  for (const count of clothesMap.values()) {
    // 해당 종류의 의상을 입지 않는 경우를 포함하여 계산하기 위해 +1
    answer *= (count + 1);
  }

  // 모든 의상을 입지 않는 경우는 제외
  return answer - 1;
}