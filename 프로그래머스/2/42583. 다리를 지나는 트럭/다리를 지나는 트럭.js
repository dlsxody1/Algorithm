function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = [];
    let totalWeight = 0;
    
    for (let i = 0; i < bridge_length; i++) {
        bridge.push(0); // 다리 길이만큼 0으로 초기화 (초기에 다리에는 트럭이 없으므로 0으로 채워짐)
    }
    while (bridge.length > 0) {
        totalWeight -= bridge.shift(); //shift 제거된 값을 반환 후 뺴준다.

        if (truck_weights.length > 0) {
            if (totalWeight + truck_weights[0] <= weight) {
                totalWeight += truck_weights[0];
                bridge.push(truck_weights.shift()); // 대기 중인 트럭을 다리에 올림 (가장 나중에 들어간 트럭이 올라가게 됨)
            } else {
                bridge.push(0); // 다리에 올릴 수 없으면 빈 공간으로 채움
            }
        }
        answer++; // 1초 증가
    }

    return answer;
}