class Customer4 {
 /*  private _firstName: string;
  private _lastName: string;

  constructor(first: string, last: string) {
    this._firstName=first;
    this._lastName=last;
  } */

  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }
}

let myCustomer4 = new Customer4("John", "Doe");

console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName);


