// function solution(cards1, cards2, goal) {
    
//     var lengths = cards1.length + cards2.length;
//     var cardArr = [];
    
    
//     console.log(cards1, cards2, goal)
//     for(let i = 0; i < cards1.length ; i++){
//         cardArr.push
//     }
    
//     for(let j = 0; j < cards2.length ; j++){
        
//     }
    
    
//     var joinArr = cardArr.join(' ');
//     var joinGoal = goal.join(' ');
//     console.log(joinArr, joinGoal)
    
    
    
    
//     return joinArr === joinGoal ? 'Yes' : 'No';
// }

function solution(cards1, cards2, goal) {
  // cards1과 cards2에 이용할 카드를 사용할 순서
  let idx1 = 0;
  let idx2 = 0;

  // goal의 길이는 cards1의 길이 + cards2의 길이이므로
  // goal을 for문으로 돌려 모든 단어를 확인해본다.
  for (let word of goal) {

    // * 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
    // 현재 들어온 단어가 cards1에 idx1 순서에 있다면
    // idx1을 1 증가시키고 넘어간다.
    if (cards1[idx1] === word) idx1++;

    // cards1 현재 순서에 단어가 같지 않다면
    // cards2 현재 순서의 단어와 같은지 확인한다.
    // 현재 순서에 있다면 idx2를 1 증가시키고 넘어간다.
    else if (cards2[idx2] === word) idx2++;
    
    // cards1과 cards2의 순서에 단어가 다 다르다면
    // 문장을 만들수 없으므로 No를 반환해준다.
    else return "No";
  }

  // for문을 통과했으면 문장을 만든 것이므로 Yes를 반환해준다.
  return "Yes";
}