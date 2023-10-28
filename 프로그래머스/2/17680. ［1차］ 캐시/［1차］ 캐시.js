const solution = (cacheSize, cities) => {
  let answer = 0;
  let arr = [];

  //  도시를 모두 대문자로 통일한다.
  cities = cities.map((it) => it.toUpperCase());

  // 캐시 사이즈가 0이면 모든 것이 cache miss이므로 *5로 리턴한다.
  if (cacheSize == 0) return cities.length * 5;

  // 배열을 순회하며 cache hit이면 배열의 맨 뒤로 푸시하고 
  // cache miss일 때는 (배열이 꽉 찼다면 맨 앞을 제거하고) 배열의 맨 뒤로 푸시한다.
  for (let i = 0; i < cities.length; i++) {
    const idx = arr.findIndex((it) => it === cities[i]);
    if (idx !== -1) {
      // Cache hit: 도시가 배열에 이미 존재하는 경우
      arr.splice(idx, 1); // 배열에서 도시를 제거
      answer += 1; // 실행 시간에 1을 추가 (cache hit은 1로 계산)
    } else if (arr.length === cacheSize) {
      // Cache miss: 배열이 캐시 크기와 같고, 캐시가 가득 찬 경우
      answer += 5; // 실행 시간에 5를 추가 (cache miss는 5로 계산)
      arr.shift(); // 배열의 맨 앞에서 가장 오래된 도시를 제거 (LRU 알고리즘)
    } else {
      // Cache miss: 배열에 공간이 남아있는 경우
      answer += 5; // 실행 시간에 5를 추가 (cache miss는 5로 계산)
    }
    arr.push(cities[i]); // 현재 도시를 배열의 맨 뒤에 추가
  }
  return answer;
};
