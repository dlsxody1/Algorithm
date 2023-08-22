function solution(brown, yellow) {
    var answer = [];
    //brown과 yellow의 갯수를 더해서 사각형이 될 수 있는 배열을 리턴하면 되겠당

    
    let count = 0;
    let colors = brown + yellow;
    
    //카펫의 최소 너비, 높이 : 3
    for(let i = 3; i < colors ; i++){
        let width = colors / i;
        let height = i;
        
        //카펫 가로가 길거나 세로랑 가틈
        if(width  < height ) continue;
        
        // yellow의 전체면적
        if((width - 2) * (height - 2) == yellow) {
            answer[0] = width;
            answer[1] = height;
        }
            
    }
    
    return answer;
}