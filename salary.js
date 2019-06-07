module.exports = class salaryModule{
    constructor(name, rate, monthDays, workHours) {
        this.name = name;
        this.rate = rate;
        this.days = monthDays;
        this.workhours = workHours;
    }
    ESV () {
        return 2754.18 / 3;
    }
    monthHours () {
        return this.days * 8;
    }
    overtime (){
        this.rate = this.rate + ((this.rate / this.monthHours()) * 1.5) * (this.workhours - this.monthHours());
        return this.rate;
    }
    income (){
        return this.rate / 100 * 5;
    }
    salary(){
        if(this.workHours > this.monthHours()){
           this.rate = this.overtime(); 
        }
        return this.rate - this.income() - this.ESV();
    }
};