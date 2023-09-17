function solution(sides) {
    sides.sort((a,b) => a-b);
    return sides[2] < sides[1] + sides[0] ? 1 : 2;
}