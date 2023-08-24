function solution(people, limit) {
    people.sort((a,b) => a - b);
    let peopleCount = 0;
    
    while(people.length > 0){
        
        if((people[0] + people[people.length-1]) <= limit ){
            peopleCount++;
            people.shift();
            people.pop();
        }else{
            peopleCount++;
            people.pop();
        }
        
    }
    
    return peopleCount;
}