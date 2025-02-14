class Person{
    constructor(){
        this.name="Luc van son";
        this.age = 20;
    }
    getname(){
        return this.name;
    }
    setage(age){
        this.age=age;
    }
    getage(){
        return this.age;
    }
}
var person = new Person();
person.setage(20);
console.log("Ten nguoi: "+person.getname());
console.log("Tuoi: "+person.getage());

