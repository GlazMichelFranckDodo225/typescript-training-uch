var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
// Instance of Customer
// let myCustomer = new Customer();
/* myCustomer.firstName = "John";
myCustomer.lastName = "Doe"; */
var myCustomer = new Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
