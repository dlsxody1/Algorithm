function solution(name, yearning, photo) {
    
    let result = [];
    for(let i = 0; i < photo.length ; i++){
        let missingArray = [];
        for(let j = 0 ; j < photo[i].length ; j++){
            let index = name.indexOf(photo[i][j]);
            if(index !== -1){
                missingArray.push(yearning[index]);
            }
        }
        
        let photoScore = missingArray.reduce((acc, curr) => acc + curr, 0);
        result.push(photoScore);
    }
  
    
    return result;
}