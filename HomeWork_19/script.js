class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    };
    getInfo(){
        return `${this.name} ${this.surname} got ${this.getSalary()}`;
    };
};

const totalProfit = empoyees.reduce(function(acc, employee){
    return (acc + employee.rate * employee.days);
}, Number());

class Boss extends Worker{
    constructor(name, surname, rate, days){
        super(name, surname, rate, days);
        this.totalProfit = totalProfit;
    };
    getSalary(){
        return super.getSalary() + totalProfit / 100 * 10;
    };
};

class Trainee extends Worker {
    constructor(name, surname, rate, days){
        super(name, surname, rate, days); 
    };
    getSalary(){
        if(this.days > 60){
            return (this.days - 60) * this.rate + 60 * this.rate / 100 * 70;
        } else {
            return super.getSalary() / 100 * 70;
        };
    };
};

let arrayWithClass = empoyees.map(employee => {
    if(employee.position === 'trainee'){
        return new Trainee(employee.name, employee.surname, employee.rate, employee.days).getInfo();
    } else if(employee.position === 'boss'){
        return new Boss(employee.name, employee.surname, employee.rate, employee.days).getInfo();
    } else if(employee.position === 'worker'){
        return new Worker(employee.name, employee.surname, employee.rate, employee.days).getInfo();
    }
});
console.log(arrayWithClass);