import {Position} from "./Position"

export class Rover {
    constructor(latitude: number, longitude: number) {
        this.Position = new Position(longitude, latitude);
    }

    Position: Position;

    Avancer() : Rover {
        return new Rover(1, 0)
    }
}