function solution(nums) {
    var answer = 0;
    //nums.length/2 마리를 가져가도 좋다
    //가장 많은 종류의 수를 return
    //이차원 배열의 순회말고, 다르면 카운트를 올릴까? 그 방법으로 하면
//     let arr = [];
//     for(let i = 0; i < nums.length ; i++){
      
//         for(let j = 0 ; j < nums.length/2 ; j++){
            
//         }
//     }
    let arr = new Set(nums);
    let dupNums = [...arr].length;
console.log(dupNums);
    
    
    return dupNums >= nums.length/2 ? nums.length/2 : dupNums ;
}