function solution(a, b) {
    
    return a.toString() + b.toString() > b.toString()+a.toString() ? Number(a.toString()+b.toString()) : Number(b.toString()+a.toString());
}