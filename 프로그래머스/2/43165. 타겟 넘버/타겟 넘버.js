function solution(numbers, target) {
  let count = 0;

  function dfs(index, currentSum) {
    if (index === numbers.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }

    // 현재 숫자를 더한 경우와 뺀 경우를 각각 재귀적으로 호출
    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }

  dfs(0, 0); // DFS 시작

  return count;
}