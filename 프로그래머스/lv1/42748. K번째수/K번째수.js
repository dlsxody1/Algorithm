function solution(array, commands) {
    var answer = [];
      var answer = [];
    commands.map((el) => {
          
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