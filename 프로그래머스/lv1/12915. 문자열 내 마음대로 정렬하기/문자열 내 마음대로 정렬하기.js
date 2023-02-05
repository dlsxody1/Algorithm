function solution(strings, n) {
    var answer = [];
    let arr = [];
//    let stringSplit = strings.map((el) => {
//        return arr.push(el.split('')[n]);
//    })
    
  //  for(let i = 0 ; i < strings.length ; i++ ){
    //         if(arr[i] < arr[i+1]){
      //           strings.splice(i,0,strings[i+1])
        //     }else if(arr[i] === arr[i+1]){
          //       
            // }
    //}
    
    
   return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
}