
















































// Simple Constructor Function
// function Car(make,model){
//     this.make = make 
//     this.model = model
// }

// let car1 = new Car("Tesla","Cybertruck")
// let car2 = new Car("Land Rover","Cruiser")
// console.log(`car1 `,car1)
// console.log(`car2 `,car2)
// let car3 = Car("Mahindra","Thar")
// console.log(car3)

// function makeCoffee(coffeeType){
//     this.coffeeType = coffeeType
//     this.brew = function(){
//         return `Brewing your ${this.coffeeType}`
//     }
// }

// let coffee1 = new makeCoffee('latte')
// console.log(coffee1)
// console.log(coffee1.brew())

// Add method to prototype (shared by all instances)

// function Animal(species){
//     this.species = species
// }

// Animal.prototype.sound = function(){
//     return `${this.species} makes a sound`
// }

// let dog = new Animal("dog")
// console.log(dog.sound())

// let cat = new Animal("cat")
// console.log(cat.sound())

// console.log(dog instanceof Animal)
// console.log(dog.constructor === Animal)