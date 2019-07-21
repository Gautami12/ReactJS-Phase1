
console.log("Print 5th number of array");
const a = [0,1,2,3,4,5,6,7,8,9];
console.log(a[4]);
//Outpt   -  4
 
///////////////////////////////


console.log("Print 10 to 20 in the same array");
for(i=10; i<21; i++){
    a.push(i);
}
console.log(a);


/////////////////////////////
console.log("Remove last element from array");
a.pop();
console.log(a);


//////////////////////////////////////
console.log("Remove first element from array");

a.shift();
console.log(a);


////////////////////////////////////

console.log("Add an element at the begining");
a.unshift(22);
console.log("Add an element at beginning");
console.log(a);

const index = a.indexOf(17);
console.log("Index of 17 : " +index);

a.splice(11,1);
console.log("Remove item at index 11");
console.log(a);

console.log("remove 5 items starting from index 4")
a.splice(4, 5);
console.log(a);

console.log("create new array having multiplication of number and index")
const b = [];
for(i=0; i<a.length; i++){
b.push(a[i] * i);
}
console.log(b);

console.log('Extract ns at index 7,8,9,10 from array a');
let d = [0,1,2,3,4,5,6,7,8,9,10]
console.log("Original a");
console.log(d);
d.splice(7,4);
console.log("Updated a");
console.log(d)

console.log("Create array c from b which has nos greater than 30")
const c = [];
for(i=0; i<b.length; i++){
if(b[i]>30){
 c.push(b[i]);
}
}
console.log(c);

console.log("Merge all 3 arrays a,b,c");
const e = [...a,...b,...c];
console.log(e);


//////////////////////////////////////////////
console.log("An object representing your favorite GOT");
const priyanka = {
firstName: 'priyanka',
lastName: 'chopra',
yearOfExperience: 25,
noOfMovies: 100,
noOfAwards: 20,
fullName: function(){
    return `${this.firstName} ${this.lastName}`;
},
bio: function(){
return `A versatile and confident actor`;
}

}
console.log("1. Return the full name");
console.log(priyanka.fullName());

console.log("2. Get Bio");
console.log(priyanka.bio());

console.log(" Baki Details using Rest Opeartor");
let {fullName,bio, ...bakidetails} = priyanka;
console.log(bakidetails);

console.log("Print first name ");
console.log(priyanka.firstName);

console.log("Extract noOfMovies and yearsOfExperience");
console.log(`${priyanka.noOfMovies} ${priyanka.yearOfExperience}`);

console.log("Create another object of a different character");

const gautami = {
    firstName1: 'gautami',
    lastName1: 'pinkyar',
    yearOfExperience1: 2,
    noOfShoots1: 15 ,
    noOfAwards1: 5,
    fullName1: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    bio1: function(){
    return `A versatile and confident actor`;
    }
    
    }
    console.log("gautami");
    console.log(gautami);

    console.log("Merging of 2 objects");
  //  let {...priyanka,...gautami}= mergeArray;
    console.log({...priyanka,...gautami});

    console.log("Create a new class defining a character and functions used in the object");
    console.log("Creating class C with attributes and methods");
    class C{
constructor(firstName, lastName, noOfMovies, noOfAwards){
 this.firstName = firstName;
 this.lastName= lastName;
 this.noOfMovies = noOfMovies;
 this.noOfAwards = noOfAwards;
}
fullName(){
    return `${this.firstName} ${this.lastName}`;
}
bio(){
return `A versatile and confident actor`;
}
    }
    let cnew1= new C("priyanka", "chopra", 100, 10);
    console.log("Fullname");
    console.log(cnew1.fullName());
    console.log("Bio");
    console.log(cnew1.bio());



    class Ca{
        constructor(firstName, lastName, noOfMovies, noOfAwards){
         this.firstName = firstName;
         this.lastName= lastName;
         this.noOfMovies = noOfMovies;
         this.noOfAwards = noOfAwards;
        }
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
        bio(){
        return `A versatile and confident actor`;
        }
            }
            let cnew = new Ca("priyanka", "chopra", 100, 10);
            console.log("Fullname");
            console.log(cnew.fullName());
            console.log("Bio");
            console.log(cnew.bio());


console.log("Create Animal Class and child class Cat")
class Animal{
    constructor(vegetarian, noOfLegs){
      this.vegetarian = vegetarian;
      this.noOfLegs = noOfLegs;
    }
    isVegetarian(){

        return  `${this.vegetarian}`
    }
    

}
class Cat extends Animal{
    constructor(vegetarian, noOfLegs, food){
        super(vegetarian, noOfLegs);
        this.food = food;
    }

}
let cat = new Cat(false, 4, 'milk');
console.log("Cat food")
console.log(cat.food);
console.log("Is Cat vegetarian")
console.log(cat.isVegetarian());
console.log("Animal Class");
let animal = new Animal(true, 4);
console.log("Animal no of legs");
console.log(animal.noOfLegs);
console.log("Animal is vegetarian");
console.log(animal.isVegetarian());

console.log("Print React is the Best after 5 seconds");
setTimeout(function(){
    console.log("React is the Best");
}, 5000)
            

console.log("React is the best after 3 seconds continuoysly");
setInterval(function(){
console.log("React is the best");
}, 3000)


console.log("PRINT React is the Best 10 times and stop");
let timer = setInterval(function(){
console.log("React is the Best");
},1000)

setTimeout(function(){
 clearInterval(timer);   
}, 11000);




    





