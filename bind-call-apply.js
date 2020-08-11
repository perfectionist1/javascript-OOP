const normalPerson = {
    firstName: "Sabbir",
    lastName: "Rahman",
    salary: 35000,
    chargeExpenses: function(amount, tax){
        console.log(this);
        // this.salary = this.salary - amount;
        this.salary = this.salary - amount - tax;
        return this.salary;
    },
    fullName: function(){
        console.log(this.firstName, this.lastName);
    }
}

const midLevelPerson = {
    firstName: "Tamim",
    lastName: "Iqbal",
    salary: 55000,
}

const expertLevelPerson = {
    firstName: "Mashrafee",
    lastName: "Bin Mortaza",
    salary: "90000",
}

// normalPerson.chargeExpenses(1000);
// console.log(normalPerson.salary);

/*
        B I N D 
*/
// const chargeOfMidLevelPerson = normalPerson.chargeExpenses.bind(midLevelPerson);
// chargeOfMidLevelPerson(3000);
// chargeOfMidLevelPerson(2222);


/*
        C A L L 
*/
// normalPerson.chargeExpenses.call(expertLevelPerson, 4000, 500);
// console.log(expertLevelPerson.salary);
// normalPerson.chargeExpenses.call(expertLevelPerson, 5000, 500);
// console.log(expertLevelPerson.salary);


/*
        A P P L Y 
*/
normalPerson.chargeExpenses.apply(midLevelPerson, [1000, 300]);
console.log(midLevelPerson.salary);
