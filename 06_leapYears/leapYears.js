const leapYears = function(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        year = true;
        return year;
    } else {
        year = false;
        return year;
    }
};


// Do not edit below this line
module.exports = leapYears;
