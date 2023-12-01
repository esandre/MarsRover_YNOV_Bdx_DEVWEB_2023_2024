import {PlanèteInterface} from "../../src/Planète.interface";
import {Position} from "../../src/Position";

export class PlanèteInfinie implements PlanèteInterface {
    Normaliser(coordonnées: Position): Position {
        return coordonnées;
    }

}