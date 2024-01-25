function solution(participant, completion) {
    var answer = '';
    // const joinParty  = completion.join('');
    // const noGoal = participant.filter((per) => {
    //     console.log(per, joinParty, !joinParty.includes(per));
    //      return !joinParty.includes(per);
    // });   
    // return noGoal[0];
    participant.sort();
    completion.sort();
    for(let i = 0 ; i < participant.length ; i++){
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    return participant[participant.length - 1]
}