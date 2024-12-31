


























































// Object Literal
// let car = {
//     make:"Toyota",
//     model:"Camry",
//     year:2020,
//     start:function(){
//         return `${this.make} car got started in ${this.year}`
//     }

// }

// console.log(car.start())

// Difficult to duplicate

// Prototype Chaining

// Array.prototype.smaran = function(){
//     return `Smaran's custom method for ${this}`
// }

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1.smaran())
// console.log(arr2.smaran())


// class Vehicle {
//     // method
//     constructor(make,model){
//         this.model = model 
//         this.make = make
//     }
//     // Class Method
//     start(){
//         return `${this.model} is a car from ${this.make}`
//     }
// }

// class Car extends Vehicle{
//     drive(){
//         return `${this.make}: Inheritance example`
//     }
// }

// let myCar = new Car("Tesla", "Roadstar")
// console.log(myCar.start())
// console.log(myCar.drive())