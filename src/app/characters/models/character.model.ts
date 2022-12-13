export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string,
    public image: string,
  ) {}

  static fromJson(data: any) : Character {
    return Object.assign(data)
  }
}