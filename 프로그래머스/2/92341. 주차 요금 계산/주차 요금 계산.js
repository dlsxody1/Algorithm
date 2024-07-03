// function solution(fees, records) {
//     var answer = [];
//     const [basicTime, basicFee, unitTime, unitFee] = fees;
    
//     const recordsMap = [];
    
//     records.forEach((el) => {
//         const splits = el.split(' ')
//         const record = []
//         splits.forEach((sp,i) => {
//             if(i === 0){
//                 record.push({'time': sp})    
//             }
//             if(i === 1){
//                 record.push({'carNum': sp})    
//             }
//             if(i === 2){
//                 record.push({'exit': sp})    
//             }
//         })
//         recordsMap.push(record);
//     })
    
//     console.log(recordsMap);
    
//     recordsMap.map((record) => {
        
//     })
//     return answer;
// }

// function calculateTime(inTime, outTime){
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const day = today.getDate();
//     const formmatingDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//     const inTimeDate = new Date(`${formmatingDate} ${inTime}:00`);
//     const outTimeDate = new Date(`${formmatingDate} ${outTime}:00`)
//     const diffDate = outTimeDate.getTime() - inTimeDate.getTime();
//     return diffDate
// }


function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;

    function timeToMinutes(time) {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    }

    function calculateFee(duration) {
        if (duration <= basicTime) {
            return basicFee;
        } else {
            return basicFee + Math.ceil((duration - basicTime) / unitTime) * unitFee;
        }
    }

    const parkingRecords = {};
    const parkedCars = {};

    records.forEach(record => {
        const [time, carNumber, status] = record.split(' ');
        const minutes = timeToMinutes(time);

        if (status === "IN") {
            parkedCars[carNumber] = minutes;
        } else {
            if (!parkingRecords[carNumber]) {
                parkingRecords[carNumber] = 0;
            }
            parkingRecords[carNumber] += minutes - parkedCars[carNumber];
            delete parkedCars[carNumber];
        }
    });

    // 처리되지 않은 IN 기록은 23:59 출차로 간주
    for (const carNumber in parkedCars) {
        if (!parkingRecords[carNumber]) {
            parkingRecords[carNumber] = 0;
        }
        parkingRecords[carNumber] += timeToMinutes("23:59") - parkedCars[carNumber];
    }

    // 요금 계산
    const result = [];
    const sortedCarNumbers = Object.keys(parkingRecords).sort((a, b) => a.localeCompare(b));
    
    sortedCarNumbers.forEach(carNumber => {
        const duration = parkingRecords[carNumber];
        const fee = calculateFee(duration);
        result.push(fee);
    });

    return result;
}
