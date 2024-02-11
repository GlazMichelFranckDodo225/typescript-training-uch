class Customer {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName=first;
    this.lastName=last;
  }
}

// Instance of Customer
// let myCustomer = new Customer();
/* myCustomer.firstName = "John";
myCustomer.lastName = "Doe"; */
let myCustomer = new Customer("John", "Doe");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);


