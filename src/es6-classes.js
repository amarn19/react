class Person{
    constructor(name="anonmyous",age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `hi this is ${this.name}`;
    }
    getDesc(){
        return `${this.name} is ${this.age} old`;
    }
}

class Student extends Person
{
constructor(name,age,major="undefined")
{
    super(name,age);
    this.major=major;
}
getDesc(){
    let desc=super.getDesc();
    if(this.major){
        return desc+`I am from ${this.major} major.`
    }
}

}

class Traveller extends Person
{
    constructor(name,age,place="undefined")
    {
        super(name,age);
        this.place=place;
    }
    getDesc(){
        let desc=super.getDesc();
        if(this.place){
            return desc+`I am coming from ${this.place}.`
        }
    }
}
const r=new Person("Amar",26);
console.log(r.getGreeting());
console.log(r.getDesc());

const p=new Person();
console.log(p.getGreeting());
console.log(p.getDesc());

const q=new Student("Amar",26,"CS");
console.log(q.getGreeting());
console.log(q.getDesc());

const t=new Traveller("Amar",26,"Chicago");
console.log(t.getGreeting());
console.log(t.getDesc());