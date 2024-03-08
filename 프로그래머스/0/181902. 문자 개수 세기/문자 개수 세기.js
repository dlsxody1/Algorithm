function solution(my_string) {
    const Alpha = Array(52).fill(0);
    my_string.split('').forEach((el, i) => {
      const charCode = el.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            Alpha[charCode - 65]++;
        } else if (charCode >= 97 && charCode <= 122) {
            Alpha[charCode - 97 + 26]++;
        }
    })
    
    return Alpha;
}