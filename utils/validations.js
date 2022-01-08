export function checkFloatNumberFieldValidation(param) {
    return !isNaN(Number(param));
}

export function checkIntNumberFieldValidation(param) {
    return Number(param) % 1 === 0;
}