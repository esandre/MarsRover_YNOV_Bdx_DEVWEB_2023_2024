import {Position} from "./Position"
import {Orientation} from "./Orientation";

export class Rover {
    private _orientation: Orientation;

    constructor(latitude: number, longitude: number, orientation: Orientation) {
        this._orientation = orientation;
        this.Position = new Position(longitude, latitude);
    }

    Position: Position;

    Avancer() : Rover {
        return new Rover(this.Position.Latitude + 1, this.Position.Longitude, this._orientation)
    }

    Reculer() {
        return new Rover(this.Position.Latitude - 1, this.Position.Longitude, this._orientation);
    }
}