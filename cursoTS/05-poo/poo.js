"use strict";
class Data {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const niver = new Data(20, 9, 1988);
console.log(niver.month);
niver.month = 10;
console.log(niver.month);
//# sourceMappingURL=poo.js.map