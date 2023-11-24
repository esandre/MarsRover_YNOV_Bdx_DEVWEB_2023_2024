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
        let destination = this._orientation.appliquer(this.Position);
        return new Rover(destination.Latitude, destination.Longitude, this._orientation);
    }

    Reculer() {
        let destination = this._orientation.opposé().appliquer(this.Position);
        return new Rover(destination.Latitude, destination.Longitude, this._orientation);
    }
}