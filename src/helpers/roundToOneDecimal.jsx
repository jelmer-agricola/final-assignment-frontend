export const roundToOneDecimal = (number) => {
    if (number === undefined) {
        return null;
    } else {
        return number.toFixed(1);
    }
};