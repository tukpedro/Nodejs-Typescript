class Data {
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

const niver = new Data(20, 9, 1988);
console.log(niver.month)
niver.month = 10
console.log(niver.month)
