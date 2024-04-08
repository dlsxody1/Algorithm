function solution(dirs) {
    const visitedPosition = new Set();
    let currentPosition = [0,0];
    const arr = []
    const directions = {
        'U' : [0,1],
        'D' : [0, -1],
        'R' : [1 , 0],
        'L' : [-1 , 0]
    }
    
    for(let i = 0 ; i < dirs.length ; i++){
       const [x1, y1] = directions[dirs[i]];
       const [x ,y] = currentPosition;
       const newX = x + x1;
       const newY = y + y1;
       if(newX >= -5 && newX <= 5 && newY >= -5 && newY <= 5){
            const path = `${x}${y}:${newX}${newY}`;
            const reversePath = `${newX}${newY}:${x}${y}`;
            visitedPosition.add(path);
            visitedPosition.add(reversePath);
            currentPosition = [newX, newY];
       }
    }
    
    
    return visitedPosition.size/2
}