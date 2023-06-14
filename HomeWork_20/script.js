class Student {
    static id = 1;
    constructor(name, surname, ratingPoint, schoolPoint, isSelfPayment){
      this.id = Student.id++;
      this.name = name;
      this.surname = surname;
      this.ratingPoint = ratingPoint;
      this.schoolPoint = schoolPoint;
      this.isSelfPayment = isSelfPayment;
    };  
};


class University {
    #universityStudents = [];
    constructor(name){
    this.name = name;
    };
    // в якості аргумента функції передаємо масив з абітурієнтами
    addStudent(arrOfStudents){
        this.#universityStudents = arrOfStudents.map(student => {
            return new Student(student.name, student.surname, student.ratingPoint, student.schoolPoint);
        })
        this.#universityStudents.sort((curent, next) => {
            if(curent.ratingPoint + curent.schoolPoint > next.ratingPoint + curent.schoolPoint){
                return -1;
            };
            if(curent.ratingPoint + curent.schoolPoint < next.ratingPoint + curent.schoolPoint){
                return 1;
            };
            return 0;
        });
        this.#universityStudents.map(student => {
            if(student.ratingPoint > 800 && this.#universityStudents.indexOf(student) <= 5){
                student.isSelfPayment = false;
            } else {
                student.isSelfPayment = true;
            };
        })
        return this.#universityStudents;
    };
    
    #checkIsSelfPayment(bool){
        let st = this.#universityStudents.filter(student => student.isSelfPayment === bool);
        return st;
    };
    budjetStudents(){
        return this.#checkIsSelfPayment(false);
    };
    contractStudents(){
        return this.#checkIsSelfPayment(true);
    };
};

const uni = new University('NAU');
console.log(uni.addStudent(students));
console.log(uni.budjetStudents());
console.log(uni.contractStudents());