function solution(rny_string) {
   return rny_string.includes('m') ? rny_string.replaceAll('m','rn') : rny_string
}