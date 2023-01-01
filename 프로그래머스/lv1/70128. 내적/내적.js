function solution(a, b) {
    let bef = [];
  for(let i = 0 ; i < a.length ; i++){
    bef.push(a[i] * b[i]);
      
  }
    let aft = bef.reduce((init,acum) => init+acum);
    return aft;
}