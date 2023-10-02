function solution(num_list, n) {
    const newArr = num_list.filter((num, i) => {
        if(i === 0 || i % n === 0) return num;
    })
    return newArr;
}