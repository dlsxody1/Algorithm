function solution(before, after) {
    let answer = [];
    let afterArr = after.split('');

    before.split('').forEach((el, i) => {
        if (afterArr.includes(el)) {
            afterArr.splice(afterArr.indexOf(el), 1);
        }
    });

    return afterArr.length === 0 ? 1 : 0;
}