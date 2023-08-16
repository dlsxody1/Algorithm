//  if(s[i] == 0){
//             i++;
//             answer[0]++;
//         }else if(s[i] == 1){
//             arr.push(s[i]);
//             i++;
//         }else if(s.includes('0') === false){
            
//             s.length.toString(2);
            
//         }

function solution(s) {
    var answer = [0, 0];

    while (s !== "1") {
        let zerosRemoved = 0;
        let newS = "";

       for (let i = 0; i < s.length; i++) {
            if (s[i] === "1") {
                newS += s[i];
            } else {
                zerosRemoved++;
            }
        }

        
        s = newS.length.toString(2);

        
        answer[0]++;

        
        answer[1] += zerosRemoved;
    }

    return answer;
}
