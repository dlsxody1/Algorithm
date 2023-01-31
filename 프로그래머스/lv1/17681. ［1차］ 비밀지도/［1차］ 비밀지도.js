function solution(n, arr1, arr2) {
    var answer = [];
    let arr1ToBinary = arr1.map(el => el.toString(2).padStart(n,0));
    let arr2ToBinary = arr2.map(el => el.toString(2).padStart(n,0));
    const sumArr = [];
    for(let i = 0; i < n ; i++){
        sumArr.push(String(+arr1ToBinary[i] + +arr2ToBinary[i]).padStart(n,0));
    }
    
    sumArr.map(el => {
        answer.push(el.split('').map((item)=> {
            return item === '0' ? item = " " : item = "#";
        }).join(""))
    })
    console.log(sumArr, 'dd');
    console.log(answer);
    return answer;
}