class Customer3 {
  private _firstName: string;
  private _lastName: string;

  constructor(first: string, last: string) {
    this._firstName=first;
    this._lastName=last;
  }

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

let myCustomer3 = new Customer3("John", "Doe");

console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);


