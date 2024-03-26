function solution(picture, k) {
    const result = [];
    
    picture.forEach(el => {
        let newRow = el.split('').map(char => char.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            result.push(newRow); 
        }
    });

    return result;
}