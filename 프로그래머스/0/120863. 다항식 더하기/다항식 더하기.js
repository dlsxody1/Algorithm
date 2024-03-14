function solution(polynomial) {
    let xTerms = 0; // 'x'를 포함하는 항의 계수 합
    let constantTerms = 0; // 상수항의 합

    // 다항식을 공백을 기준으로 분리하여 각 항을 추출
    const terms = polynomial.split(' + ');

    terms.forEach(term => {
        if (term.includes('x')) {
            // 'x'를 포함하는 항 처리
            const coefficient = term.split('x')[0];
            xTerms += coefficient === '' ? 1 : parseInt(coefficient, 10); // 계수가 생략된 경우 1로 처리
        } else {
            // 상수항 처리
            constantTerms += parseInt(term, 10);
        }
    });

    // 결과 문자열 생성
    let result = '';

    if (xTerms !== 0) {
        result += (xTerms === 1 ? '' : xTerms) + 'x'; // 계수가 1인 경우 생략
    }
    if (constantTerms !== 0) {
        if (result.length > 0) result += ' + ';
        result += constantTerms;
    }

    return result.length > 0 ? result : '0';
}