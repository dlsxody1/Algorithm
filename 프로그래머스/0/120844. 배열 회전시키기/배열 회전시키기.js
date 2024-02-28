function solution(numbers, direction) {
    var answer = [];
    
    return numbers.map((el,i,arr) => {
        if(direction === 'right'){
            if(i === 0){
                return el = arr[arr.length - 1];
            }else if(i <= arr.length-1){
                return el = arr[i-1]
            }
        }else{
            if(i < arr.length-1){
                return el = arr[i+1];
            }else if(i === arr.length-1){
                console.log(arr[0])
                return el = arr[0]
            }
        }
    } );
}