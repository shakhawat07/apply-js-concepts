function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}
const year = 1996;
const isYourYearLeapYear = isLeapYear(year);
console.log("Is your year leap year = ", isYourYearLeapYear);