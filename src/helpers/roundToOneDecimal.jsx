export const roundToOneDecimal = (number) => {
    if (number === undefined){
        return null;
    }
    return number.toFixed(1);
};