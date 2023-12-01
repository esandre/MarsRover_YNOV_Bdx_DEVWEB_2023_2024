export class Position{
    constructor(longitude: number, latitude: number) {
        this.Longitude = longitude;
        this.Latitude = latitude;
    }

    Latitude: number;
    Longitude: number;

    public add(position: Position) : Position {
        return new Position(this.Longitude + position.Longitude, this.Latitude + position.Latitude);
    }

    public modulo(number: number) {
        return new Position(this.Longitude % number, this.Latitude % number);
    }
}