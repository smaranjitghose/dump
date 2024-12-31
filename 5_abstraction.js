// Abstraction
// Hides the complex implementation details















































// class Phone {
//     constructor(model) {
//         this.model = model;
//     }
    
//     call(number) {
//         this.#validateNumber(number);
//         this.#connectToNetwork();
//         this.#routeCall(number);
//         return `Calling ${number}...`;
//     }
    
//     // Internal complex implementation hidden
//     #validateNumber(number) {
//         // Complex validation logic
//     }
    
//     #connectToNetwork() {
//         // Complex network connection logic
//     }
    
//     #routeCall(number) {
//         // Complex call routing logic
//     }
// }

// const phone = new Phone("iPhone");
// console.log(phone.call("123-456-7890"));  // User only sees simple interface