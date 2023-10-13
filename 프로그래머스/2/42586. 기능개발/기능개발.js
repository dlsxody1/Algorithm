function solution(progresses, speeds) {
    const answer = [];
    const daysRemaining = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

    let day = 0;
    let count = 0;

    while (daysRemaining.length > 0) {
        if (daysRemaining[0] <= day) {
            daysRemaining.shift();
            count++;
        } else {
            if (count > 0) {
                answer.push(count);
                count = 0;
            }
            day++;
        }
    }

    answer.push(count);

    return answer;
}