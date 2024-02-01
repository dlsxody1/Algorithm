function solution(arr) {
    //행 : 1차원 배열의 원소 갯수, 열 : 2차원 배열의 길이.
    //행의 수가 많으면 각 원소에 0을 추가.  
    let answer = arr.map(el => [...el]);
    if(arr.length > arr[0].length){
        for(let i = 0 ; i < (arr.length - arr[0].length); i++){ 
            answer.forEach((el) => {
                el.push(0);
            })
        }
    }else if(arr.length < arr[0].length){
        const zeroArr = Array(arr[0].length).fill(0);        
        for(let i = 0 ; i < (arr[0].length - arr.length); i++){
            answer.push([...zeroArr]);
        }
    }else{
        return arr.map(el => [...el]);
    }
    //열의 수가 많으면 같은 원소의 길이만큼 0 배열을 만들어서 추가한다.
    return answer;
}
