import {Position} from "./Position"
import {Orientation} from "./Orientation";

export class Rover {
    private readonly _orientation: Orientation;
    public readonly Position: Position;

    constructor(position: Position, orientation: Orientation) {
        this._orientation = orientation;
        this.Position = position;
    }


    public Avancer() : Rover {
        let destination = this._orientation.appliquer(this.Position);
        return new Rover(destination, this._orientation);
    }

    public Reculer() {
        let destination = this._orientation.opposé().appliquer(this.Position);
        return new Rover(destination, this._orientation);
    }

    public TournerADroite() : Rover {
        return new Rover(this.Position, this._orientation.SuivanteHoraire());
    }

    public TournerAGauche() {
        return new Rover(this.Position, this._orientation.SuivanteAntihoraire());
    }
}