export class Photographer {
  public _id: number;
  public firstName: string;
  public lastName: string;
  public rate: number;
  public specialization: string;

  constructor(
    _id: number,
    firstName: string,
    lastName: string,
    rate: number,
    specialization: string
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.specialization = specialization;
  }
}
