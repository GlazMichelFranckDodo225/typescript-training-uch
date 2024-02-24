"use strict";
class Customer4 {
    /*  private _firstName: string;
     private _lastName: string;
   
     constructor(first: string, last: string) {
       this._firstName=first;
       this._lastName=last;
     } */
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let myCustomer4 = new Customer4("John", "Doe");
console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName);
