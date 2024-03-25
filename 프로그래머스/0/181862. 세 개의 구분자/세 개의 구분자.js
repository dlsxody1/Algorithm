function solution(myStr) {
    const splits = myStr.split(/[abc]/).filter((el) => el !== '');
    return splits.length === 0 ? ['EMPTY'] : splits;
}