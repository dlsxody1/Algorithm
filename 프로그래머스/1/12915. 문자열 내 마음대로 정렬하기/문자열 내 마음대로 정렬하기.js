function solution(strings, n) {
    
      for (let i = 0; i < strings.length - 1; i++) {
          //현재 비교 중인 요소와 다음 요소를 비교하기 위함
        for (let j = 0; j < strings.length - i - 1; j++) {
            const char1 = strings[j].charAt(n);
            const char2 = strings[j + 1].charAt(n);

            if (char1 > char2 || (char1 === char2 && strings[j] > strings[j + 1])) {
                // Swap
                const temp = strings[j];
                strings[j] = strings[j + 1];
                strings[j + 1] = temp;
            }
        }
    }

    return strings;

}