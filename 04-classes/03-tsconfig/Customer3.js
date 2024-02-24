"use strict";
class Customer3 {
    constructor(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
let myCustomer3 = new Customer3("John", "Doe");
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
