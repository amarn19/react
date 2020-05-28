import { directive } from "babel-types";

var a="aa";
var a="bb";

const aa="aa";
//aa="bbd";
console.log('value',aa);

const user={
    name:"amar",
    cities:['chennai','bangalore','chicago'],
    placesVisited:function(){
        const that =this;
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city)=>{
            console.log(that.name +" lived in "+city)
        });
    }
    
};

console.log(user.placesVisited());

const multipier={
    num:[1,2,3,4,5,7],
    mulitply(){ return this.num.map((num1)=>num1*2);}
};

console.log(multipier.mulitply());



