function solution(my_string, index_list) {
   return index_list.map((str) => my_string[str]).join('')
}