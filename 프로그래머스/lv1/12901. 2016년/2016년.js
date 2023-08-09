function solution(a, b) {
    var answer = '';
    //2016년 기준으로 a월 b일이 무슨 요일인지 구하면된다.
    //Zeller의 공식을 이용했다가.. 값이 잘 안나왔다..
    //h = (q + ((13(m+1)) / 5) + K + (K/4) + (J/4) + 5J) % 7
    
    //배열을 만들고 getday가 return 하는 숫자를 배열의 인덱스로 넣었다!
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const fullyear = `2016-${a}-${b}`;
    const formattingDay = new Date(fullyear).getDay();
    
    return days[formattingDay];
}