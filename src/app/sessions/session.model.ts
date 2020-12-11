export class Session {
  public _id: number;
  public photographerId: number;
  public clientId: number;
  public dateFrom: Date;
  public dateTo: Date;
  public place: string;
  public subject: string;

  constructor(
    _id: number,
    photographerId: number,
    clientId: number,
    dateFrom: Date,
    dateTo: Date,
    place: string,
    subject: string
  ) {
    this._id = _id;
    this.photographerId = photographerId;
    this.clientId = clientId;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.place = place;
    this.subject = subject;
  }
}
