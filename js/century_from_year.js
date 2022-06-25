// Century From Year
// Given a year, return the century it is in.

const century = (year) => Number.isInteger(year / 100) ? year / 100 : Math.floor(year / 100 + 1)
