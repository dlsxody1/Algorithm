// 최대 공약수를 계산하는 함수
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  // 두 분수의 분모의 최소 공배수를 계산
  const lcm = (denom1 * denom2) / gcd(denom1, denom2);
  
  // 각 분자를 공통 분모로 변환
  const newNumer1 = numer1 * (lcm / denom1);
  const newNumer2 = numer2 * (lcm / denom2);
  
  // 분자를 더하고 최대 공약수를 다시 계산
  const resultNumer = newNumer1 + newNumer2;
  const commonGcd = gcd(resultNumer, lcm);
  
  // 기약 분수로 나타내기
  const simplifiedNumer = resultNumer / commonGcd;
  const simplifiedDenom = lcm / commonGcd;
  
  // 결과를 배열로 반환
  return [simplifiedNumer, simplifiedDenom];
}