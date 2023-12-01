import {Position} from "./Position"
import {Orientation} from "./Orientation";
import {PlanèteInterface} from "./Planète.interface";

export class Rover {
    private readonly _orientation: Orientation;
    public readonly Position: Position;
    private readonly _planète: PlanèteInterface;

    constructor(position: Position, orientation: Orientation, planète: PlanèteInterface) {
        this._orientation = orientation;
        this.Position = planète.Normaliser(position);
        this._planète = planète;
    }


    public Avancer() : Rover {
        let destination = this._orientation.appliquer(this.Position);
        return new Rover(destination, this._orientation, this._planète);
    }

    public Reculer() {
        let destination = this._orientation.opposé().appliquer(this.Position);
        return new Rover(destination, this._orientation, this._planète);
    }

    public TournerADroite() : Rover {
        return new Rover(this.Position, this._orientation.SuivanteHoraire(), this._planète);
    }

    public TournerAGauche() {
        return new Rover(this.Position, this._orientation.SuivanteAntihoraire(), this._planète);
    }
}