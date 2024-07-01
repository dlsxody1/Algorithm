// function solution(s, skip, index) {
//     var answer = '';
//     const splits = s.split('').map((el,i) => {
//         let alphabet = s[i].charCodeAt(0) + index;
       
//         if(alphabet > 122){
//             alphabet -= 26
//         }
        
//         if(skip.includes(el)){
//             return;
//         }else{
//             return String.fromCharCode(alphabet);
//         }
        
//     })
    
//     console.log(splits);
//     return answer;
// }


function solution(s, skip, index) {
    const skipSet = new Set(skip);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const validChars = alphabet.split('').filter(char => !skipSet.has(char));

    const shiftChar = (char, index) => {
        let startIdx = validChars.indexOf(char);
        let newIdx = (startIdx + index) % validChars.length;
        return validChars[newIdx];
    };
    
    let result = '';

    for (let char of s) {
        if (!skipSet.has(char)) {
            result += shiftChar(char, index);
        } else {
            result += char; 
        }
    }

    return result;
}