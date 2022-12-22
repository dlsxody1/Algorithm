function solution(arr, divisor) {
    let answer = [];
  for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] % divisor === 0) answer.push(arr[i]);
      
  }
if(answer.length === 0) return [-1];
    let sorting = answer.sort(function(a, b)  {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
});
    
    return sorting;
}