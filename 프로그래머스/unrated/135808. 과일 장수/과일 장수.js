    //한 상자에 m개의 사과
    //상자의 담긴 사과 중 가장 낮은 점수가 p 점인 경우 한 상자의 가격은 p * m
    //가능한 많은 사과를 팔았을 때 받을 수 있는 최대 이익.
function solution(k, m, score) {
//     var answer = 0;
//     //일단 m개씩 묶어야한다.
//     let boxes = [];
//     let currentBox =[];
//     score.sort();
    
    
//     for(let i = 0 ; i< score.length; i++){
//         currentBox.push(score[i]);
//         if(currentBox.length === m){
//             boxes.push(currentBox);
//             currentBox = [];
//         }
//     }
    
//     if(currentBox.length > 0){
//         boxes.push(currentBox);
//     }
    //배열만큼 박스를 채우고 비우고를 반복한다음에 남은 박스를 채우려고 했다.
    //근데.. 첫 번째 케이스에 [1,1,1],[2,2,3,3] < - 이렇게 담겨야하는데
    //[1,1,1,2] [2,2,3] <- 이렇게 담겨서 원하는 결과가 안나왔다.
//     console.log(boxes)
//     for(let box of boxes){
//         const lowerScore = box[0];
//         const boxPrice = lowerScore * m;
//         answer += boxPrice;
//     }
    
    //다른 분의 풀이
        let answer = 0;
    const boxes = [];
    
    // 배열 오름차순 정렬
    score.sort((a, b) => b - a);
    
    // 배열 요소를 하나씩 제거하여 상자를 만듦.
    for (let i = 0, box = []; i < score.length; i++) {
        box.push(score[i]);
        if ((i + 1) % m === 0) {
            boxes.push(box);
            box = [];
        }
    }
    
    // 최솟값을 구하여 m개씩 곱해서 answer 총합에 더함.
    for (let i = 0; i < boxes.length; i++) {
        answer += Math.min(...boxes[i]) * m;
    }
    
    return answer;
    
}