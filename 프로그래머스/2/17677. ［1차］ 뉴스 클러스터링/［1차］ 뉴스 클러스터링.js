function solution(str1, str2) {
  //두 문자열 입력받아 각 문자열에 대해 2글자씩 끊어서 집합을 만들어야함
//교집합과 합집합의 길이를 구해 자카드 유사도 구해서 return
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const arr1 = new Array();
  const arr2 = new Array();
    
  for (let i = 0; i < str1.length - 1; i++) {
      //두 문자씩 자름.
    const str = str1.substr(i, 2);
      //대문자임을 확인하고 나서 arr1에 push
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr1.push(str);
    }
      //그러면 FRANCE라고 했을 때 FR RA AN... 이 나옴
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.substr(i, 2);
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr2.push(str);
    }
  }

  //교집합과 합집합을 구하는 과정
  const intersection = [];
  const union = [];
  for (let i = 0; i < arr2.length; i++) {
      //arr1에 app2[i] 원소가 있을 경우
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }
  if (intersection.length === 0 && union.length === 0) {
    return 65536;
  }
  return parseInt(65536 * (intersection.length / union.length));
}
