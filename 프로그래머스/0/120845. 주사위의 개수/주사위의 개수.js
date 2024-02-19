function solution(box, n) {
    const maxInX = Math.floor(box[0] / n);
    const maxInY = Math.floor(box[1] / n);
    const maxInZ = Math.floor(box[2] / n);

    return maxInX * maxInY * maxInZ;
}