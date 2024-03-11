function solution(quiz) {
    var answer = [];
    const OX = {
        "-" : (a,b) => Number(a) - Number(b),
        "+" : (a,b) => Number(a) + Number(b)
    }
    
    const quizMap = quiz.map((el) => {
        const splits = el.split(' ')
        return OX[splits[1]](splits[0], splits[2]) == splits[splits.length-1] ? 'O' : 'X'
    })
    return quizMap;
}