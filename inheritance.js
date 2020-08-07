class Father{
    constructor(){
        this.fatherName = "Schwarzneggar";
    }
}

class Child extends Father{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return `${this.name}  ${this.fatherName}`;
    }
}

const childOne = new Child('Klutzer');
console.log(childOne.getFullName());

