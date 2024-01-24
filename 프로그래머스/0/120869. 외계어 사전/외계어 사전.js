function solution(spell, dic) {
    var answer = 0;
     const joinSpell = spell.sort().join('');
     const dicMap = dic.map((word) => {
         return word.split('').sort().join('');
     })
    
    for(let i = 0; i < dicMap.length ; i++){
        console.log(joinSpell);
        if(dicMap[i].includes(joinSpell)){
            
            answer = 1;
            break;
        }    
       answer = 2; 
    }
    console.log(answer,'after');
    return answer;
}