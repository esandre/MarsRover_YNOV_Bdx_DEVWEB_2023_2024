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
        let longitude = this.Longitude % number;
        if(longitude === -0) longitude = 0;

        let latitude = this.Latitude % number;
        if(latitude === -0) latitude = 0;

        return new Position(this.Longitude, latitude);
    }
}