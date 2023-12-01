import {Rover} from "../../src/Rover";
import {Orientation} from "../../src/Orientation";
import {Position} from "../../src/Position";

export class RoverBuilder {

    private orientation: Orientation  = Orientation.Nord;
    private position : Position = new Position(0, 0);

    public Orienté(orientation: Orientation) : RoverBuilder {
        this.orientation = orientation;
        return this;
    }

    public AyantPourPosition(latitude: number, longitude: number) : RoverBuilder{
        this.position = new Position(longitude, latitude);
        return this;
    }

    public Build() : Rover {
        return new Rover(this.position, this.orientation);
    }
}