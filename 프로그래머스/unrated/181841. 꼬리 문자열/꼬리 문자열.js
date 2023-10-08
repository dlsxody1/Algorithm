function solution(str_list, ex) {
   return str_list.map((str) => {if(!str.includes(ex)) return str.replace(ex,'')}).join('')
}