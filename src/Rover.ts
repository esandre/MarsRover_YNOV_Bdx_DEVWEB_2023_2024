import {Position} from "./Position"

export class Rover {
    constructor(latitude: number, longitude: number) {
        this.Position = new Position(longitude, latitude);
    }

    Position: Position;

    Avancer() : Rover {
        return new Rover(this.Position.Latitude + 1, this.Position.Longitude)
    }
}