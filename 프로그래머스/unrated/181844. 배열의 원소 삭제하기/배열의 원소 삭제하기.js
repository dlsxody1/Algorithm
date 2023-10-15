function solution(arr, delete_list) {
    for (let i = 0; i < delete_list.length; i++) {
        const index = arr.indexOf(delete_list[i]);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
}