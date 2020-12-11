export class Client {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public address: string;
  public _id: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    _id: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this._id = _id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
