function solution(n, m, section) {
    var answer = 0;
    //페인트칠 된 n미터의 벽 , 벽에 덧칠하기로함.
    //구역을 1m , n개로 나누고 구역에는 왼쪽부터 1번부터 n번까지 번호를 붙인다.
    //벽에 페인트를 칠하는 길이는 m미터
    //롤러로 칠해야 되는 최소 횟수를 리턴.

  // 현재까지 칠한 구역
  let part = 0;

  // section을 forEach() 메서드로 하나씩 확인한다.
  section.forEach((n) => {

    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (n > part) {

      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = n + m - 1;

      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
    }
  });

  return answer;
}

