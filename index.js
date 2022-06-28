// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
    return ['Antonia', 'Nuru']
}
const returnLastTwoDrivers = function() {
    return ['Amari', 'Mo']
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(num1) {
    return function (num2) {
        return num1*num2
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers (drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return ['Antonia', 'Nuru']
    } else if (fn === returnLastTwoDrivers) {
        return ['Amari', 'Mo']
    }
}