function solution(skill, skill_trees) {
    var answer = 0;

    // 각 스킬트리를 검사
    skill_trees.forEach(tree => {
        // 스킬 순서에서 필요한 스킬만 추출
        let skillOrder = tree.split('').filter(s => skill.includes(s));
        
        // 필요한 스킬들이 순서에 맞는지 확인
        let isValid = true;
        for (let i = 0; i < skillOrder.length; i++) {
            if (skillOrder[i] !== skill[i]) {
                isValid = false;
                break;
            }
        }
        
        // 유효한 스킬트리라면 answer 증가
        if (isValid) {
            answer++;
        }
    });

    return answer;
}