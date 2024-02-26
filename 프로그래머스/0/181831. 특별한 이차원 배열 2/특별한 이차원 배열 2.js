function solution(arr) {
    let answer = 0;
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i][j] === arr[j][i]){
                answer++;
                console.log(answer);
            }else{
                break;
            }
        }
    }
    
    
    return answer === Math.pow(arr.length, 2) ? 1 : 0
}