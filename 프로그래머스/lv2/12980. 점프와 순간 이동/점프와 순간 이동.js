function solution(n)
{
    //K칸 앞으로 점프 -> K만큼 건전지 사용량 소모
    //순간이동 (현재 온 거리 * 2) -> 건전지 사용량 소모 x
    //N만큼의 거리로 떨어져 있는 장소로 간다. 건전지 사용량의 최솟값을 return 
    
    var ans = 0;
    
    //거리가 0이 될 때 까지 반복
    while(n !== 0){
        //현재 거리가 홀수일 경우
        if(n % 2 === 1){
            ans++; //사용량 증가
            n -= 1; //거리 1만큼 줄임
        }else{
            n /= 2; //거리를 절반으로 줄임.
        }
    }

    return ans;
}