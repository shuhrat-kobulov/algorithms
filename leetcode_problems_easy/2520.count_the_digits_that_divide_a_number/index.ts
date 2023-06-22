function countDigits(num: number): number {
    let strNum = String(num);
    let countDivide = 0;

    for(let i = 0; i < strNum.length; i++) {
        if(num % Number(strNum[i]) === 0) {
            countDivide += 1
        }
    }

    return countDivide
};
