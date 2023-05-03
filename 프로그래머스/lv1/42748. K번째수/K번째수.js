function solution(array, commands) {
    var answer = [];
      var answer = [];
    commands.map((el) => {
          
        // sort() 메소드를 사용할 때는 안에 값을 넣어주지 않으면 문자열 배열을 리턴해버린다...!!
        // 조심!
        return answer.push(array.slice(el[0]-1, el[1]).sort((a,b) => a-b)[el[2]-1]);
    })
    return answer;
    // commands.map((el) => {
    //     const i = el[0] - 1;
    //     const j = el[1] - 1;
    //     const k = el[2] - 1;
    //     const sliced = array.slice(i, j + 1);
    //     const sorted = sliced.sort((a, b) => a - b);
    //     answer.push(sorted[k]);
    // });
    // return answer;
}
