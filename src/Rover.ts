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
        if(this._orientation == Orientation.Nord)
            return new Rover(this.Position.Latitude + 1, this.Position.Longitude, this._orientation);
        if(this._orientation == Orientation.Est)
            return new Rover(this.Position.Latitude, this.Position.Longitude + 1, this._orientation);
        if(this._orientation == Orientation.Ouest)
            return new Rover(this.Position.Latitude, this.Position.Longitude - 1, this._orientation);
        else return this.Reculer();
    }

    Reculer() {
        return new Rover(this.Position.Latitude - 1, this.Position.Longitude, this._orientation);
    }
}